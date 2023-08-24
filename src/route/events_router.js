const route = require("express").Router();
const eventsController = require("../controller/eventsController");

route.get(`/all_events`, eventsController.getAllEvents);
route.get(`/query`);
route.get(`/:id`, eventsController.getById);
route.patch("/:id", eventsController.update);
route.delete("/:id", eventsController.deleteOne);

module.exports = route;
