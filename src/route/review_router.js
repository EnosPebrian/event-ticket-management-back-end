const reviewController = require(`../controller/reviewController`);
const api_key_verificator = require("../middlewares/api_KeyVerificator");
const authVerificator = require("../middlewares/authVerificator");
const delete_modify_comment_verificator = require("../middlewares/delete_modify_comment_Verificator");
const ticketCodeVerificator = require("../middlewares/ticketCodeVerificator");
const route = require(`express`).Router();

route.get(
  `/`,
  api_key_verificator,
  reviewController.getAll.bind(reviewController)
);
route.get(
  `/event/:eventid`,
  api_key_verificator,
  reviewController.getByEventId.bind(reviewController)
);
route.get(
  `/:id`,
  api_key_verificator,
  reviewController.getById.bind(reviewController)
);

route.post(
  `/`,
  api_key_verificator,
  authVerificator,
  ticketCodeVerificator,
  reviewController.create.bind(reviewController)
);

route.patch(
  `/:id`,
  api_key_verificator,
  authVerificator,
  reviewController.update.bind(reviewController),
  reviewController.getById.bind(reviewController)
);
route.delete(
  `/:id`,
  api_key_verificator,
  authVerificator,
  delete_modify_comment_verificator,
  reviewController.delete.bind(reviewController)
);

module.exports = route;
