const userController = require(`../controller/userController`);
const {
  userValidationRules,
  validate,
} = require("../middlewares/register_validator");
const route = require(`express`).Router();

// route.get(`/`, userController.getAll.bind(userController));

route.get(`/:id`, userController.getById.bind(userController));

route.post(`/`, userController.create.bind(userController));
route.post(
  `/new_account`,
  userValidationRules(),
  validate,
  userController.register.bind(userController)
);
route.post(
  `/new_account_verification/:id`,
  userController.sendVerification.bind(userController)
);
route.post(
  `/verify_user/:token`,
  userController.verifyAccount.bind(userController)
);
route.post(`/auth`, userController.login.bind(userController));

route.patch(
  `/:id`,
  userController.update.bind(userController),
  userController.getById.bind(userController)
);
route.delete(`/:id`, userController.delete.bind(userController));

module.exports = route;
