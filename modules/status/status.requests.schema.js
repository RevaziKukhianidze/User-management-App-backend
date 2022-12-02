const Joi = require("joi");

exports.statusIdSchema = Joi.object().keys({
  id: Joi.string().valid().max(24).min(24).required(true),
});

exports.statusSchema = Joi.object().keys({
  statusName: Joi.string().min(1).max(40).valid().required(),
});
