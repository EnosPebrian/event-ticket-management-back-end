const transactionController = require("../controller/transactionController");
const authVerificator = require("../middlewares/authVerificator");
const {
  transactionValidationRules,
  validate,
} = require("../middlewares/transaction_validator");
const route = require("express").Router();

route.get("/", transactionController.getAll.bind(transactionController));
route.get(
  "/:id",
  transactionController.getTransactionById.bind(transactionController)
);

route.get(
  "/userEvent/:id",
  transactionController.getUserByEvent.bind(transactionController)
);

route.get(
  "/eventUser/:id",
  transactionController.getEventByUser.bind(transactionController)
);

route.post(
  "/",
  transactionValidationRules(),
  validate,
  transactionController.createTransaction.bind(transactionController)
);

module.exports = route;
