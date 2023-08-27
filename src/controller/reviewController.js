const db = require("../sequelize/models");
const Controller = require("./Controller");

class ReviewController extends Controller {
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
        include: [{ model: db.User, attributes: ["username"] }],
      })
      .then((result) => res.send(result))
      .catch((err) => res.status(400).send(err?.message));
  }
}

module.exports = new ReviewController(`Review`);
