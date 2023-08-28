const ticketController = require("../controller/ticketController");
const route = require("express").Router();

route.get(`/`, ticketController.getAll.bind(ticketController));
route.get(`/q`, ticketController.getTicketByQuery.bind(ticketController));
route.get(`/:id`, ticketController.getById.bind(ticketController));
route.post(`/`, ticketController.create.bind(ticketController));

route.patch(
  `/:id`,
  ticketController.update.bind(ticketController),
  ticketController.getById.bind(ticketController)
);
route.delete(`/:id`, ticketController.delete.bind(ticketController));

module.exports = route;
