const discussionController = require(`../controller/discussionController`);
const api_key_verificator = require("../middlewares/api_KeyVerificator");
const authVerificator = require("../middlewares/authVerificator");
const delete_modify_verificator = require("../middlewares/delete_modify_discussion_verificator");
const route = require(`express`).Router();

route.get(
  `/`,
  api_key_verificator,
  discussionController.getAll.bind(discussionController)
);
route.get(
  `/event/:eventid`,
  api_key_verificator,
  discussionController.getByEventId.bind(discussionController)
);
route.get(
  `/:id`,
  api_key_verificator,
  discussionController.getById.bind(discussionController)
);

route.post(
  `/`,
  api_key_verificator,
  authVerificator,
  discussionController.create.bind(discussionController)
);

route.patch(
  `/:id`,
  api_key_verificator,
  authVerificator,
  delete_modify_verificator,
  discussionController.update.bind(discussionController),
  discussionController.getById.bind(discussionController)
);

route.delete(
  `/:id`,
  api_key_verificator,
  authVerificator,
  delete_modify_verificator,
  discussionController.delete.bind(discussionController)
);

module.exports = route;
