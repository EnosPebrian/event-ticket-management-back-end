const eventsController = require(`../controller/eventsController`);
const route = require(`express`).Router();
const { blobUploader, fileUploader } = require("../middlewares/multer");
const validationEvent = require("../middlewares/validateEvent");
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
  fileUploader({
    destinationFolder: "imgevents",
    prefix: "IMG-EVENT-UPDATE",
    filetype: "image",
  }).array("image"),
  validationEvent,
  eventsController.updateEvent.bind(eventsController),
  eventsController.getEventsById.bind(eventsController)
);
route.delete(
  `/:id`,
  eventsController.deleteEventWithImage.bind(eventsController)
);
route.post(
  `/`,
  fileUploader({
    destinationFolder: "imgevents",
    prefix: "IMG-EVENT",
    filetype: "image",
  }).array("image"),
  validationEvent,
  eventsController.createEvent.bind(eventsController)
);

module.exports = route;
