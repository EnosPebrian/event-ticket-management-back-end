const db = require("../sequelize/models");
const Controller = require("./Controller");
const moment = require("moment");

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
          {
            model: db.Review,
            attributes: {
              include: [
                [
                  db.sequelize.literal(
                    `TIMEDIFF('${moment()
                      .utc()
                      .format("YYYY-MM-DD HH:mm:ss")}',Review.createdAt)`
                  ),
                  "timediff",
                ],
              ],
            },
          },
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

  async create(req, res) {
    const { userid, eventid, ticketcode, category, ticket_price } = req.body;
    try {
      const pushTicket = await db.Ticket.create({
        userid,
        eventid,
        ticketcode,
        category,
        ticket_price,
      });
      res.status(201).send(pushTicket);
    } catch (err) {
      res.status(500).send(err?.message);
    }
  }
}

module.exports = new ticketController(`Ticket`);
