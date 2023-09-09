const eventsController = require(`../controller/eventsController`);
const route = require(`express`).Router();
const { blobUploader, fileUploader } = require("../middlewares/multer");
const validationEvent = require("../middlewares/validateEvent");

route.get(`/`, eventsController.getAll.bind(eventsController));

route.get(`/q`, eventsController.getByQuery.bind(eventsController));
route.get(`/:id`, eventsController.getById.bind(eventsController));

route.patch(
  `/:id`,
  eventsController.update.bind(eventsController),
  eventsController.getById.bind(eventsController)
);
route.delete(`/:id`, eventsController.delete.bind(eventsController));
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
