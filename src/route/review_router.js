const reviewController = require(`../controller/reviewController`);
const route = require(`express`).Router();

route.get(`/`, reviewController.getAll.bind(reviewController));
route.get(
  `/context/:eventid`,
  reviewController.getByEventId.bind(reviewController)
);
route.get(`/:id`, reviewController.getById.bind(reviewController));

route.post(`/`, reviewController.create.bind(reviewController));

route.patch(
  `/:id`,
  reviewController.update.bind(reviewController),
  reviewController.getById.bind(reviewController)
);
route.delete(`/:id`, reviewController.delete.bind(reviewController));

module.exports = route;
