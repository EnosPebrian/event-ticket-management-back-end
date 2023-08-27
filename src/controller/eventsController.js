const { Op, where } = require("sequelize");
const db = require("../sequelize/models");
const Controller = require("./Controller");

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
    } = req.query;
    console.log(order_by);
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
      },
      include: [
        {
          model: db.Photo_event,
          as: "Photo_event",
          required: true,
          attributes: ["url"],
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
}

module.exports = new EventController(`Event`);
