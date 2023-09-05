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
        offset: (page ? Number(page) - 1 : 0) * limit,
        order: [["createdAt", "DESC"]],
        include: [{ model: db.User, attributes: ["username"] }],
      })
      .then((result) => {
        const number_of_pages = Math.ceil(result.count / limit);
        return res.send({
          number_of_pages: number_of_pages,
          data: result.rows,
        });
      })
      .catch((err) => res.status(400).send(err?.message));
  }
}

module.exports = new ReviewController(`Review`);
