const eventsController = require(`../controller/eventsController`);
const route = require(`express`).Router();

route.get(`/`, eventsController.getAll.bind(eventsController));
route.get(`/:id`, eventsController.getById.bind(eventsController));
route.post(`/`, eventsController.create.bind(eventsController));

route.patch(
  `/:id`,
  eventsController.update.bind(eventsController),
  eventsController.getById.bind(eventsController)
);
route.delete(`/:id`, eventsController.delete.bind(eventsController));

module.exports = route;
