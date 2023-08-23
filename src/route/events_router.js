const router = require("express").Router();
const eventsController = require("../controller/eventsController");

router.get(`/all_events`, eventsController.getAllEvents);
router.get(`/:id`, eventsController.getOne);
router.patch("/:id", eventsController.update);
router.delete("/:id", eventsController.deleteOne);

module.exports = router;
