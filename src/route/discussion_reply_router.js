const disc_repController = require(`../controller/discussion_reply_Controller`);
const route = require(`express`).Router();

route.get(`/`, disc_repController.getAll.bind(disc_repController));
route.get(`/:id`, disc_repController.getById.bind(disc_repController));
route.post(`/`, disc_repController.create.bind(disc_repController));

route.patch(
  `/:id`,
  disc_repController.update.bind(disc_repController),
  disc_repController.getById.bind(disc_repController)
);
route.delete(`/:id`, disc_repController.delete.bind(disc_repController));

module.exports = route;
