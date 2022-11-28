const Joi = require("joi");

exports.userIdSchema = Joi.object().keys({
  id: Joi.string().valid().max(24).min(24).required(true),
});

exports.userSchema = Joi.object().keys({
  firstName: Joi.string().min(1).max(40).valid().required(),
  lastName: Joi.string().min(1).max(40).valid().required(),
  email: Joi.string().min(5).max(255).required().email(),
  idNumber: Joi.number().optional().allow(null, ""),
  birthDate: Joi.string().optional().allow(null, ""),
  category: Joi.string().optional().allow(null, ""),
  status: Joi.string().optional().allow(null, ""),
});
