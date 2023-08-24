const route = require("express").Router();
const eventsController = require("../controller/eventsController");

route.get(`/all_events`, eventsController.getAllEvents);
route.get(`/:id`, eventsController.getOne);
route.patch("/:id", eventsController.update);
route.delete("/:id", eventsController.deleteOne);

module.exports = route;
