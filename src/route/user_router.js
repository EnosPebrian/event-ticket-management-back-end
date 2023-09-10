const userController = require(`../controller/userController`);
const authVerificator = require(`../middlewares/authVerificator`);
const {
  userValidationRules,
  validate,
} = require("../middlewares/register_validator");
const route = require(`express`).Router();
const api_key_verificator = require("../middlewares/api_KeyVerificator");

// route.get(`/`, userController.getAll.bind(userController));

route.get("/token", userController.getUserByToken.bind(userController));

route.get(
  `/:id`,
  api_key_verificator,
  userController.getById.bind(userController)
);

route.post(`/`, userController.create.bind(userController));
route.post(
  `/new_account`,
  userValidationRules(),
  validate,
  api_key_verificator,
  userController.register.bind(userController)
);
route.post(
  `/token`,
  api_key_verificator,
  userController.keepLogin.bind(userController)
);
route.post(
  `/new_account_verification/:id`,
  api_key_verificator,
  userController.sendVerification.bind(userController)
);
route.post(
  `/verify_user/:token`,
  api_key_verificator,
  userController.verifyAccount.bind(userController)
);
route.post(
  `/auth`,
  api_key_verificator,
  userController.login.bind(userController)
);

route.patch(
  `/:id`,
  api_key_verificator,
  userController.update.bind(userController),
  userController.getById.bind(userController)
);
route.delete(
  `/:id`,
  api_key_verificator,
  userController.delete.bind(userController)
);

module.exports = route;
