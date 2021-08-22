const Joi = require('joi')

const joiContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: false }).optional(),
  phone: Joi.string().required(),
})

module.exports = joiContactSchema
