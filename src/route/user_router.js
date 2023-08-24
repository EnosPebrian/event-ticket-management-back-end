const userRouter = require("../controller/userController");
const route = require("express").Router();

route.get(`/all_user`, userRouter.getAll);
route.get(`/query`);
route.get(`/:id`, userRouter.getById);
route.patch("/:id", userRouter.update);
route.delete("/:id", userRouter.deleteOne);

module.exports = route;
