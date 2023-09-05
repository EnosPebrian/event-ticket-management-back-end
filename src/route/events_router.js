const eventsController = require(`../controller/eventsController`);
const route = require(`express`).Router();
const {blobUploader} = require("../middlewares/multer")

route.get(`/`, eventsController.getAll.bind(eventsController));
route.get(`/q`, eventsController.getByQuery.bind(eventsController));
route.get(`/:id`, eventsController.getById.bind(eventsController));

route.post(`/create`,blobUploader({filetype: "image"}).single("image"), eventsController.createEvent.bind(eventsController));

route.patch(
  `/:id`,
  eventsController.update.bind(eventsController),
  eventsController.getById.bind(eventsController)
);
route.delete(`/:id`, eventsController.delete.bind(eventsController));

module.exports = route;
