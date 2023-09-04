const { body, validationResult } = require(`express-validator`);

const userValidationRules = () => {
  return [
    body("email").isEmail().withMessage("not an email"),
    body("password").isLength({ min: 8 }).withMessage("minimal 8 characters"),
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

module.exports = { userValidationRules, validate };
