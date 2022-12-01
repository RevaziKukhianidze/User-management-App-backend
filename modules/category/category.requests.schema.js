const Joi = require("joi");

exports.categoryIdSchema = Joi.object().keys({
  id: Joi.string().valid().max(24).min(24).required(true),
});

exports.categorySchema = Joi.object().keys({
  categoryName: Joi.string().min(1).max(40).valid().required(),
});
