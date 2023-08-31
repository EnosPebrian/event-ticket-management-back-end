const { where } = require("sequelize");
const db = require("../sequelize/models");
const Controller = require("./Controller");
const bcrypt = require("bcrypt");

class UserController extends Controller {
  constructor(modelname) {
    super(modelname);
  }

  async register(req, res) {
    const { email, reference } = req.body;
    const t = await db.sequelize.transaction();
    try {
      await this.db
        .findOne(
          {
            where: { email },
          },
          { transaction: t }
        )
        .then((result) => {
          if (result?.dataValues.id) throw new Error(`Email has been used`);
        });

      if (reference) {
        await this.db
          .findOne(
            {
              where: { referralcode: reference },
            },
            { transaction: t }
          )
          .then(async (result) => {
            if (!result?.dataValues.id)
              throw new Error(`Referral code doesnot match to anyone`);
            result.dataValues.points += 20000;
            req.body.points = 20000;
            await this.db.update(
              { ...result.dataValues },
              { where: { id: result.dataValues.id } },
              { transaction: t }
            );
          });
      }
      req.body.password = await bcrypt.hash(req.body.password, 13);
      const result = await this.db.create({ ...req.body }, { transaction: t });
      await t.commit();
      return res.send(result);
    } catch (err) {
      await t.rollback;
      res.status(400).send(err?.message);
    }
  }

  async login(req, res) {}
}

module.exports = new UserController(`User`);
