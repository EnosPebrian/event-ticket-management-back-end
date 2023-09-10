const Joi = require("joi");

const validationEvent = (req, res, next) => {
  try {
    console.log(req.body);
    const eventValidationSchema = Joi.object({
      name: Joi.string().required(),
      location: Joi.string().required(),
      category: Joi.string().required(),
      date_start: Joi.date().iso().required(),
      time_start: Joi.string().required(),
    }).options({ allowUnknown: true });

    const { error } = eventValidationSchema.validate(req.body);
    // console.log(error.message, "asdasdasd permisi");
    if (error?.message)
      throw new Error("Input selain berhubungan dengan price dan stock kosong");

    next();
  } catch (err) {
    res.json({
      status: 400,
      message: err?.message,
    });
  }
};

module.exports = validationEvent;
