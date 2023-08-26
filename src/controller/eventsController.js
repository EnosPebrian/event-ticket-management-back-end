const { Op } = require("sequelize");
const db = require("../sequelize/models");
const Controller = require("./Controller");

class EventController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
  getByQuery(req, res) {
    const { name, location, category, date_start, date_end, page, limit } =
      req.query;
    this.db.count();
    this.db
      .findAll({
        where: {
          ...(name && { name: { [Op.like]: `%${name}%` } }),
          ...(typeof location === "string" && {
            location: { [Op.in]: [location] },
          }),
          ...(typeof location === "object" && {
            location: { [Op.in]: [...location] },
          }),
          ...(typeof category === "string" && {
            category: { [Op.in]: [category] },
          }),
          ...(typeof category === "object" && {
            category: { [Op.in]: category },
          }),
        },
        include: db.Photo_event,
      })
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send(err?.message));
  }
}

module.exports = new EventController(`Event`);
