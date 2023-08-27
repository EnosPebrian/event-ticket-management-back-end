const db = require("../sequelize/models");
const event = require("../sequelize/models/event");
const Controller = require("./Controller");

class DiscussionController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
  getByEventId(req, res) {
    const { eventid } = req.params;
    const { page } = req.query;
    const limit = 15;
    this.db
      .findAndCountAll({
        where: { eventid },
        limit: limit,
        offset: (page ? page - 1 : 0) * limit,
        include: [{ model: db.User, attribute: ["username"] }],
      })
      .then((result) => res.send(result))
      .catch((err) => res.status(400).send(err?.message));
  }
}

module.exports = new DiscussionController(`Discussion`);
