const Photo_eventController = require(`../controller/photo_event_controller`);
const { blobUploader } = require("../middlewares/multer");
const route = require(`express`).Router();

route.get(`/`, Photo_eventController.getAll.bind(Photo_eventController));
route.post(
  "/addphoto",
  blobUploader({ filetype: "image" }).single("image"),
  Photo_eventController.addPhotoEvent.bind(Photo_eventController)
);
route.get(`/:id`, Photo_eventController.getById.bind(Photo_eventController));
route.post(`/`, Photo_eventController.create.bind(Photo_eventController));
route.patch(
  `/:id`,
  Photo_eventController.update.bind(Photo_eventController),
  Photo_eventController.getById.bind(Photo_eventController)
);
route.delete(`/:id`, Photo_eventController.delete.bind(Photo_eventController));

module.exports = route;
