const categoryController = require(`../controller/eventCategoryController`);
const route = require(`express`).Router();

route.get(
  `/allEvent`,
  categoryController.getAllCurrentEventCategory.bind(categoryController)
);
route.get(`/q`, categoryController.getCategoryByQuery.bind(categoryController));

module.exports = route;
