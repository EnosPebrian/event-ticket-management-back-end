const { Op, where, DATE } = require("sequelize");
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
              `(SELECT AVG(ratings) FROM Reviews WHERE Reviews.eventid = Event.id GROUP BY Reviews.eventid)`
            ),
            "Average_ratings",
          ],
          [
            db.sequelize.literal(
              `(SELECT count(ratings) FROM Reviews WHERE Reviews.eventid = Event.id GROUP BY Reviews.eventid)`
            ),
            "Number_of_ratings",
          ],
          [
            db.sequelize.literal(
              `(SELECT count(*) FROM Tickets WHERE Tickets.eventid = Event.id GROUP BY Tickets.eventid)`
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
    const fileImg = req?.files;
    let tempImg = null;
    tempImg = fileImg.map((img) => img.filename);

    console.log(tempImg);
    // const formData = new FormData();
    // formData.append();

    // console.log(req.body);
    try {
      const { token } = req;
      const dataIdToken = jwt.verify(token, process.env.jwt_secret);
      const dataEvent = {
        ...req.body,
        event_creator_userid: dataIdToken.id,
        date_start: DATE("NOW"),
        isfree: 0,
        is_sponsored: 0,
        url: req.body,
      };
      console.log(dataEvent);
      if (dataEvent) {
        const checkVerifyedUser = await db.User.findByPk(dataIdToken.id);
        // console.log(checkVerifyedUser.dataValues.is_verified);
        console.log(checkVerifyedUser, "ini data user");
        if (
          checkVerifyedUser.dataValues.is_verified == null ||
          checkVerifyedUser.dataValues.is_verified == 0
        ) {
          throw new Error("Silahkan verifikasi akun anda dulu");
        }

        // fetch location
        const locationInput = req.body.location ? req.body.location : "";
        const locationId = [];
        if (locationInput !== "") {
          const locationFind = await db.Location.findAll({
            where: {
              location_name: {
                [Op.like]: `%${locationInput}%`,
              },
            },
          })
            .then((result) => locationId.push(result[0].dataValues))
            .catch((err) => {
              throw new Error("Lokasi tidak di temukan");
            });
        }
        // console.log(locationId, "ini locaiton");

        // fetch category event
        const categoryEvent = await db.Event_category.findAll({
          where: {
            category: {
              [Op.like]: `%${req.body?.category}%`,
            },
          },
        })
          .then((result) => result)
          .catch((err) => {
            throw new Error("Category tidak di temukan");
          });

        if (categoryEvent.length === 0)
          throw new Error("Category tidak di temukan");

        const dataCreate = { ...dataEvent };
        if (dataCreate.vip_ticket_price == "") {
          dataCreate.isfree = 1;
          dataCreate.is_sponsored = 1;
          dataCreate.vip_ticket_price = 0;
          dataCreate.vip_ticket_stock = 0;
          dataCreate.presale_ticket_price = 0;
          dataCreate.presale_ticket_stock = 0;
          dataCreate.normal_ticket_price = 0;
          dataCreate.normal_ticket_stock = 0;
        }

        dataCreate.location = locationId[0].id;
        dataCreate.category = categoryEvent[0].dataValues.id;
        // console.log(categoryEvent[0].dataValues.id, "ini category");

        //create event
        const createEvent = await db.Event.create(dataCreate);

        //add event photo to table photo event

        const addPhotoEventPromise = tempImg.map(async (filename) => {
          const addPhoto = await db.Photo_event.create({
            url: filename,
            eventid: createEvent.id,
          });
          return addPhoto;
        });
        const addPhotoEvent = await Promise.all(addPhotoEventPromise);
        res.status(200).json({
          message: "Create event success",
          createEvent,
          addPhotoEvent,
        });
      }
    } catch (err) {
      res.json({
        status: 404,
        message: err?.message,
      });
    }
  }
  async updateEvent(req, res, next) {
    const fileImg = req?.files;
    const tempImg = fileImg.map((img) => img.filename);

    // const formData = new FormData();
    // formData.append();

    // console.log(req.body);
    try {
      const { token } = req;
      const dataIdToken = jwt.verify(token, process.env.jwt_secret);
      const dataEvent = {
        ...req.body,
      };

      if (dataEvent) {
        const checkVerifyedUser = await db.User.findByPk(dataIdToken.id);
        // console.log(checkVerifyedUser.dataValues.is_verified);
        // console.log(checkVerifyedUser, "ini data user");
        if (
          checkVerifyedUser.dataValues.is_verified == null ||
          checkVerifyedUser.dataValues.is_verified == 0
        ) {
          throw new Error("Silahkan verifikasi akun anda dulu");
        }

        // fetch location
        const locationInput = req.body.location ? req.body.location : "";
        const locationId = [];
        if (locationInput !== "") {
          const locationFind = await db.Location.findAll({
            where: {
              location_name: {
                [Op.like]: `%${locationInput}%`,
              },
            },
          })
            .then((result) => locationId.push(result[0].dataValues))
            .catch((err) => {
              throw new Error("Lokasi tidak di temukan");
            });
        }
        // console.log(locationId, "ini locaiton");

        // fetch category event
        const categoryEvent = await db.Event_category.findAll({
          where: {
            category: {
              [Op.like]: `%${req.body?.category}%`,
            },
          },
        })
          .then((result) => result)
          .catch((err) => {
            throw new Error("Category tidak di temukan");
          });

        if (categoryEvent.length === 0)
          throw new Error("Category tidak di temukan");

        const dataCreate = {
          ...dataEvent,
          event_creator_userid: dataIdToken.id,
          isfree: 0,
          is_sponsored: 0,
        };
        if (dataCreate.vip_ticket_price == "") {
          dataCreate.isfree = 1;
          dataCreate.is_sponsored = 1;
          dataCreate.vip_ticket_price = 0;
          dataCreate.vip_ticket_stock = 0;
          dataCreate.presale_ticket_price = 0;
          dataCreate.presale_ticket_stock = 0;
          dataCreate.normal_ticket_price = 0;
          dataCreate.normal_ticket_stock = 0;
        }

        dataCreate.location = locationId[0].id;
        dataCreate.category = categoryEvent[0].id;
        console.log(dataCreate);
        console.log(locationId[0].id, "ini category");
        console.log(categoryEvent[0].id, "ini category");

        // Find Event
        const findEvent = await db.Event.findOne({
          where: {
            id: req.params.id,
          },
        });

        if (!findEvent) {
          throw new Error("Event tidak di temukan");
        }

        //Check is verify
        if (findEvent.event_creator_userid != dataIdToken.id) {
          throw new Error("Tidak bisa edit event");
        } else {
          //Update Event
          await findEvent.update(dataCreate);

          //Find old image event
          // ...

          // Find old image event
          const oldPhoto = [];
          const findPhotoEvent = await db.Photo_event.findAll({
            where: {
              eventid: req.params.id,
            },
          });
          findPhotoEvent.map((image) => oldPhoto.push(image.dataValues));
          // console.log(oldPhoto);
          if (!findPhotoEvent) {
            throw new Error("Photo event tidak di temukan");
          }
          // console.log(findPhotoEvent.dataValues, "in photo");

          // ...

          const newImages = [];
          console.log(newImages);
          for (const img of tempImg) {
            if (!oldPhoto.some((photo) => photo.url === img)) {
              newImages.push({ eventid: req.params.id, url: img });
            }
          }

          for (const newPhoto of newImages) {
            const exixtingPhoto = oldPhoto.find(
              (photo) => photo.url === newPhoto.url
            );
            console.log(newPhoto);

            if (exixtingPhoto) {
              await db.Photo_event.update(newPhoto, {
                where: { eventid: req.params.id, url: newPhoto.url },
              });
            } else {
              await db.Photo_event.create(newPhoto);
            }
          }

          // ...

          next();
        }
      }
    } catch (err) {
      res.json({
        status: 500,
        message: err?.message,
      });
    }
  }
  async getEventsById(req, res) {
    const { id } = req.params;
    await db.Event.findByPk(id, {
      include: [
        {
          model: db.Photo_event,
          as: "Photo_event",
          attributes: ["eventid", "url"],
        },
      ],
    })
      .then((result) =>
        res.status(201).json({
          message: "Data berhasil di update",
          result,
        })
      )
      .catch((err) => res.status(500).send(err?.message));
  }
  async deleteEventWithImage(req, res) {
    try {
      const { token } = req;
      const dataToken = jwt.verify(token, process.env.jwt_secret);

      const checkVerif = await db.User.findByPk(dataToken.id);
      // console.log(checkVerif.dataValues);
      if (checkVerif.dataValues.is_verified == 0) {
        throw new Error("Silahkan verifikakasi akun anda dulu");
      }
      //fetch event
      const findEvent = await db.Event.findOne({
        where: { id: req.params.id },
      });
      if (!findEvent) {
        throw new Error("Event tidak di temukan");
      }
      if (findEvent.dataValues.event_creator_userid != dataToken.id) {
        throw new Error("Tidak bisa delete event");
      } else {
        await db.Event.destroy({ where: { id: req.params.id } });
        await db.Photo_event.destroy({
          where: { eventid: req.params.id },
        });

        res.json({
          status: 201,
          message: "Event berhasil di hapus",
        });
      }
    } catch (err) {
      res.json({
        status: 500,
        message: err.message,
      });
    }
  }
  async getEventWithUser(req, res) {
    try {
      const { token } = req;
      const idUser = jwt.verify(token, process.env.jwt_secret);
      if (!idUser) {
        throw new Error("Silahkan login dulu");
      }
      const findEvent = await db.Event.findAll({
        where: {
          event_creator_userid: idUser.id,
        },
        include: [
          {
            model: db.User,
            as: "User",
            attributes: { exclude: [] },
          },
          {
            model: db.Photo_event,
            as: "Photo_event",
            attributes: ["eventid", "url"],
          },
        ],
      });
      findEvent.forEach((event) => {
        console.log(event.dataValues);
      });

      res.status(201).send(findEvent);
    } catch (err) {
      res.json({
        status: 400,
        message: err?.message,
      });
    }
    const { token } = req;
  }
}

module.exports = new EventController(`Event`);
