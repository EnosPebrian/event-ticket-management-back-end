const db = require("../sequelize/models");
const Controller = require("./Controller");
const moment = require("moment");

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
        attributes: [
          "id",
          "question_text",
          "eventid",
          "createdAt",
          [
            db.sequelize.literal(
              `TIMEDIFF('${moment()
                .utc()
                .format("YYYY-MM-DD HH:mm:ss")}',Discussion.createdAt)`
            ),
            "timediff",
          ],
        ],
        where: { eventid },
        limit: limit,
        offset: (page ? Number(page) - 1 : 0) * limit,
        order: [["createdAt", "DESC"]],
        include: [
          { model: db.User, attributes: ["id", "username"] },
          {
            model: db.Discussion_reply,
            as: "Discussion_reply",
            attributes: [
              "reply_text",
              "createdAt",
              [
                db.sequelize.literal(
                  `TIMEDIFF('${moment()
                    .utc()
                    .format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}',Discussion_reply.createdAt)`
                ),
                "timediff",
              ],
            ],
            include: [{ model: db.User, attributes: ["username"] }],
          },
        ],
      })
      .then((result) =>
        res.send({
          number_of_pages: Math.ceil(result.count / limit),
          data: result.rows,
        })
      )
      .catch((err) => res.status(400).send(err?.message));
  }
}

module.exports = new DiscussionController(`Discussion`);
