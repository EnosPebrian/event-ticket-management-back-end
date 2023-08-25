const userController = require(`../controller/userController`);
const route = require(`express`).Router();

route.get(`/`, userController.getAll.bind(userController));
route.get(`/:id`, userController.getById.bind(userController));
route.post(`/`, userController.create.bind(userController));

route.patch(
  `/:id`,
  userController.update.bind(userController),
  userController.getById.bind(userController)
);
route.delete(`/:id`, userController.delete.bind(userController));

module.exports = route;
