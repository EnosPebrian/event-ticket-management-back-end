const { where } = require("sequelize");
const db = require("../sequelize/models");
const Controller = require("./Controller");
const bcrypt = require("bcrypt");
const mailer = require("../lib/nodemailer");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const mustache = require(`mustache`);

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
          if (result) throw new Error(`Email has been used`);
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
      await this.sendVerification({ params: { id: result.id } }, res);
    } catch (err) {
      await t.rollback;
      res.status(400).send(err?.message);
    }
  }

  async sendVerification(req, res) {
    const { id } = req.params;
    const user = await this.db.findOne({
      where: { id },
    });
    const template = fs
      .readFileSync(__dirname + "/../template/verify.html")
      .toString();

    const token = jwt.sign(
      { id: user.id, is_verified: user.is_verified },
      process.env.jwt_secret,
      { expiresIn: "5min" }
    );
    const renderTemplate = mustache.render(template, {
      username: user.dataValues.username,
      fullname: user.dataValues.email,
      verify_url: process.env.verify_url + `${id}/` + token,
    });

    await mailer({
      subject: "FOMOPHOBIA Account Verification",
      to: user.email,
      html: renderTemplate,
    });
    await this.db.update({ verify_token: token }, { where: { id } });

    return res.send("Email for account verification has been sent");
  }

  async verifyAccount(req, res) {
    try {
      const { token } = req.params;
      const { id } = req.query;
      const user = await this.db.findByPk(id);
      const payload = jwt.verify(token, process.env.jwt_secret);
      console.log(user.dataValues.verify_token);
      if (token != user.dataValues.verify_token)
        throw new Error(`Your credential does not match`);
      if (payload.is_verified)
        throw new Error("This account has been verified");
      await this.db.update(
        { is_verified: true, verify_token: "" },
        { where: { id: payload.id } }
      );
      return res.send(`User has been verified`);
    } catch (err) {
      return res.status(406).send(err?.message);
    }
  }

  async login(req, res) {}
}

module.exports = new UserController(`User`);
