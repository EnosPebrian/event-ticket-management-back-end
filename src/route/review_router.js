const reviewRouter = require("../controller/reviewController");
const route = require("express").Router();

route.get(`/all_review`, reviewRouter.getAll);
route.get(`/query`);
route.get(`/:id`, reviewRouter.getById);
route.patch("/:id", reviewRouter.update);
route.delete("/:id", reviewRouter.deleteOne);

module.exports = route;
