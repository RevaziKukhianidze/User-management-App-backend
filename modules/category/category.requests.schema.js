const Joi = require("joi");

exports.categorySchema = Joi.object().keys({
  categoryName: Joi.string().min(1).max(40).valid().required(),
});
