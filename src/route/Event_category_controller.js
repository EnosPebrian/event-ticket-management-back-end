const categoryController = require(`../controller/eventCategoryController`);
const route = require(`express`).Router();

route.get(
  `/allEvent`,
  categoryController.getAllCurrentEventCategory.bind(categoryController)
);

module.exports = route;
