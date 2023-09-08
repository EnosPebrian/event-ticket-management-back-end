const { body, validationResult } = require(`express-validator`);

const transactionValidationRules = () => {
  return [
    body("user_id").isNumeric().withMessage("user id must be a number"),
    body("event_id").isNumeric().withMessage("event id must be a number"),
    body("vip_ticket").isBoolean().withMessage("vip ticket must be boolean"),
    body("normal_ticket")
      .isBoolean()
      .withMessage("normal ticket must be boolean"),
    body("presale_ticket")
      .isBoolean()
      .withMessage("presale ticket must be boolean"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const errorExtractor = [];
  errors.errors.map((err) => {
    errorExtractor.push({ [err.path]: err.msg });
  });
  return res.status(422).json({ errors: errorExtractor });
};

module.exports = { transactionValidationRules, validate };
