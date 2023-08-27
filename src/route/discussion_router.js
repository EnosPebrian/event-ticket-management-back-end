const discussionController = require(`../controller/discussionController`);
const route = require(`express`).Router();

route.get(`/`, discussionController.getAll.bind(discussionController));
route.get(
  `/context/:eventid`,
  discussionController.getByEventId.bind(discussionController)
);
route.get(`/:id`, discussionController.getById.bind(discussionController));
route.post(`/`, discussionController.create.bind(discussionController));

route.patch(
  `/:id`,
  discussionController.update.bind(discussionController),
  discussionController.getById.bind(discussionController)
);
route.delete(`/:id`, discussionController.delete.bind(discussionController));

module.exports = route;
