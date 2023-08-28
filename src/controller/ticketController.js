const db = require("../sequelize/models");
const Controller = require("./Controller");

class ticketController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
  getTicketByQuery(req, res) {
    const { userid, eventid, page } = req.query;
    const limit = 10;
    this.db
      .findAndCountAll({
        ...(limit && { limit: Number(limit) }),
        ...(!limit && { limit: 12 }),
        ...{ offset: (page ? page - 1 : 0) * (limit ? limit : 12) },
        where: {
          ...(userid && { userid: userid }),
          ...(eventid && { eventid: eventid }),
        },
        include: [
          {
            model: db.User,
            attributes: ["username"],
          },
          { model: db.Review, attributes: ["id", "createdAt", "updatedAt"] },
          { model: db.Event, attributes: ["name", "date_start"] },
        ],
      })
      .then((result) => {
        return res.send({
          number_of_pages: Math.ceil(result.count / limit),
          data: result.rows,
        });
      });
  }
}

module.exports = new ticketController(`Ticket`);
