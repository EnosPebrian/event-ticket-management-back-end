const { Op } = require("sequelize");
const db = require("../sequelize/models");
const Controller = require("./Controller");

class CategoryController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
  getAllCurrentEventCategory(req, res) {
    const { completed_event } = req.query;
    this.db
      .findAll({
        logging: false,
        attributes: ["category"],
        include: [
          {
            model: db.Event,
            attributes: ["id", "name"],
            where: {
              date_start: {
                [Op.gte]: completed_event ? "2023-01-01" : new Date(),
              },
            },
          },
        ],
      })
      .then((result) => {
        const temp = [];
        result.forEach((val) => temp.push(val.dataValues.category));
        return res.send(temp);
      })
      .catch((err) => res.status(400).send(err?.message));
  }
  getCategoryByQuery(req, res) {
    const { category } = req.query;
    this.db
      .findAll({
        logging: false,
        where: {
          ...(category && {
            category: { [Op.like]: `%${category}%` },
          }),
        },
      })
      .then((result) => res.send(result))
      .catch((err) => res.status(400).send(err?.message));
  }
}

module.exports = new CategoryController(`Event_category`);
