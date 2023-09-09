const eventsController = require(`../controller/eventsController`);
const route = require(`express`).Router();
const { blobUploader } = require("../middlewares/multer");
const api_key_verificator = require("../middlewares/api_KeyVerificator");

route.get(
  `/`,
  api_key_verificator,
  eventsController.getAll.bind(eventsController)
);
route.get(
  `/q`,
  api_key_verificator,
  eventsController.getByQuery.bind(eventsController)
);
route.get(
  `/:id`,
  api_key_verificator,
  eventsController.getById.bind(eventsController)
);

route.post(
  `/create`,
  blobUploader({ filetype: "image" }).single("image"),
  eventsController.createEvent.bind(eventsController)
);

route.patch(
  `/:id`,
  eventsController.update.bind(eventsController),
  eventsController.getById.bind(eventsController)
);
route.delete(`/:id`, eventsController.delete.bind(eventsController));

module.exports = route;
