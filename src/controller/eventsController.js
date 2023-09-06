const { Op, where } = require("sequelize");
const db = require("../sequelize/models");
const Controller = require("./Controller");
const jwt = require("jsonwebtoken");

class EventController extends Controller {
  constructor(modelname) {
    super(modelname);
  }
  async getByQuery(req, res) {
    const {
      id,
      name,
      location,
      category,
      date_start,
      date_end,
      completed_event,
      page,
      limit,
      order_by,
      is_sponsored,
      event_creator_userid,
    } = req.query;
    const queryString = {
      attributes: {
        include: [
          [
            db.sequelize.literal(
              `(SELECT AVG(ratings) FROM reviews WHERE reviews.eventid = Event.id GROUP BY reviews.eventid)`
            ),
            "Average_ratings",
          ],
          [
            db.sequelize.literal(
              `(SELECT count(ratings) FROM reviews WHERE reviews.eventid = Event.id GROUP BY reviews.eventid)`
            ),
            "Number_of_ratings",
          ],
          [
            db.sequelize.literal(
              `(SELECT count(*) FROM tickets WHERE tickets.eventid = Event.id GROUP BY tickets.eventid)`
            ),
            "Number_of_ticket_sold",
          ],
        ],
      },
      where: {
        ...(id && { id: id }),
        ...(name && {
          [Op.or]: [
            { name: { [Op.like]: `%${name}%` } },
            { venue: { [Op.like]: `%${name}%` } },
            { description: { [Op.like]: `%${name}%` } },
            { "$Location.location_name$": { [Op.like]: `%${name}%` } },
            { "$Event_category.category$": { [Op.like]: `%${name}%` } },
          ],
        }),
        ...(typeof location === "string" && {
          "$Location.location_name$": { [Op.like]: `%${location}%` },
        }),
        ...(typeof location === "object" && {
          [Op.or]: location.map((val) => {
            return { "$Location.location_name$": { [Op.like]: `%${val}%` } };
          }),
        }),
        ...(typeof category === "string" && {
          "$Event_category.category$": { [Op.in]: [category] },
        }),
        ...(typeof category === "object" && {
          "$Event_category.category$": { [Op.in]: category },
        }),
        ...(is_sponsored && { is_sponsored: true }),
        ...(date_start && { date_start: { [Op.gte]: date_start } }),
        ...(!date_start &&
          !completed_event && { date_start: { [Op.gte]: new Date() } }),
        ...(!date_start &&
          completed_event && { date_start: { [Op.gte]: "2023-01-01" } }),
        ...(date_end && { date_end: { [Op.lte]: date_end } }),
        ...(event_creator_userid && {
          event_creator_userid: event_creator_userid,
        }),
      },
      include: [
        {
          model: db.Photo_event,
          as: "Photo_event",
          required: true,
          attributes: ["url", "id"],
        },
        {
          model: db.Event_category,
          as: "Event_category",
          required: true,
          attributes: ["category"],
        },
        {
          model: db.Location,
          as: "Location",
          required: true,
          attributes: ["location_name"],
        },
        {
          model: db.User,
          as: "User",
          required: true,
          attributes: ["username"],
        },
      ],
      ...(typeof order_by === "object" && {
        order: order_by.map((value) => {
          if (value === "HighestRating")
            return [db.sequelize.col("Average_ratings"), "desc"];
          if (value === "MostPopular")
            return [db.sequelize.col("Number_of_ticket_sold"), "desc"];
          if (value === "EarlierbyDate")
            return [db.sequelize.col("date_start"), "asc"];
        }),
      }),
      ...(typeof order_by === "string" && {
        order: [
          order_by === "HighestRating"
            ? [db.sequelize.col("Average_ratings"), "desc"]
            : order_by === "MostPopular"
            ? [db.sequelize.col("Number_of_ticket_sold"), "desc"]
            : order_by === "EarlierbyDate"
            ? [db.sequelize.col("date_start"), "asc"]
            : null,
        ],
      }),
    };
    this.db
      .findAndCountAll({
        ...(limit && { limit: Number(limit) }),
        ...(!limit && { limit: 12 }),
        ...{ offset: (page ? page - 1 : 0) * (limit ? limit : 12) },
        ...queryString,
      })
      .then((result) => {
        const number_of_events = result.count;
        const number_of_pages = Math.ceil(
          number_of_events / (limit ? limit : 12)
        );
        if (page > number_of_pages || page < 1)
          return res.status(400).send("No item in this page");
        return res.send({
          number_of_pages: number_of_pages,
          data: result.rows,
        });
      })
      .catch((err) => res.status(500).send(err?.message));
  }
  async createEvent(req, res) {
    try {
      const { token } = req;
      const dataIdToken = jwt.verify(token, process.env.jwt_secret);
      // console.log(data.id);
      const dataEvent = {
        // name: req.body.name,

        // venue: req.body.venue,
        // category: req.body.category,
        // date_start: req.body.date_start,
        // date_end: req.body.date_end,
        // time_start: req.body.date_start,
        // time_end: req.body.time_end,
        // description: req.body.description,
        // vip_ticket_price: req.body.vip_ticket_price,
        // vip_ticket_stock: req.body.vip_ticket_stock,
        // presale_ticket_price: req.body.presale_ticket_price,
        // presale_ticket_stock: req.body.name.presale_ticket_stock,
        // normal_ticket_price: req.body.normal_ticket_price,
        // normal_ticket_stock: req.body.normal_ticket_stock,
        // event_creator_userid: data.id,
        // isfree: 1,
        // is_sponsored: 1,
        ...req.body,

        event_creator_userid: dataIdToken.id,
        isfree: 1,
        is_sponsored: 1,
      };

      if (dataEvent) {
        const checkVerifyedUser = await db.User.findByPk(dataIdToken.id).then(
          (result) => result
        ); // check veryfied

        console.log(checkVerifyedUser.dataValues.is_verified);
        if (
          checkVerifyedUser.dataValues.is_verified == null ||
          checkVerifyedUser.dataValues.is_verified == 0
        ) {
          return res.send("Silahkan verifikasi akun anda dulu");
        }

        // fetch location
        const locationInput = req.body.location ? req.body.location : "";
        console.log(locationInput);
        if (locationInput !== "") {
          const locationEvent = await db.Location.findAll({
            where: {
              location_name: {
                [Op.like]: `%${locationInput}%`,
              },
            },
          })
            .then((result) => result)
            .catch((err) => res.status(404).send(err?.message));

          if (!locationEvent[0] || locationEvent.length === 0) {
            return res.status(404).send("Lokasi atau input salah");
          }
        } else {
          return res.send("Lokasi atau input salah");
        }

        const categoryEvent = await db.Event_category.findAll({
          where: {
            category: {
              [Op.like]: `%${req.body.category}%`,
            },
          },
        }); // fetch category event

        if (!categoryEvent[0]) {
          return res.status(404).send("Category not found");
        }
        // console.log(categoryEvent[0].dataValues.id);

        const dataCreate = { ...dataEvent };
        if (
          dataCreate.normal_ticket_price ||
          dataCreate.vip_ticket_price ||
          dataCreate.presale_ticket_price
        ) {
          dataCreate.isfree = 0;
          dataCreate.is_sponsored = 0;
        }
        dataCreate.location = locationEvent[0].dataValues.id;
        dataCreate.category = categoryEvent[0].dataValues.id;

        // console.log(dataCreate);
        // const createEvent = await db.Event.create(dataCreate);

        res.status(200).json({
          message: "Create event success",
          // event,
          // locationEvent,
          // createEvent,
        });
      }
    } catch (err) {
      res.status(500).send(err?.message);
    }
  }
}

module.exports = new EventController(`Event`);
