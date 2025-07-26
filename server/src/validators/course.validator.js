const Joi = require('joi');

exports.courseSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(10).required(),
  instructorId: Joi.string().required()
});
