const { Op } = require("sequelize");
const db = require("../sequelize/models");
const Controller = require("./Controller");

class ReviewController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
  getAllCurrentEventLocation(req, res) {
    const { completed_event } = req.query;
    this.db
      .findAll({
        attributes: ["location_name"],
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
        result.forEach((val) => temp.push(val.dataValues.location_name));
        return res.send(temp);
      })
      .catch((err) => res.status(400).send(err?.message));
  }
}

module.exports = new ReviewController(`Location`);
