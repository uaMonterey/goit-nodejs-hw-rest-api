const { contactSchema } = require('../../validation')
const contactsOperations = require('../../model/contacts')

const updateContact = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        message: 'missing required name field',
      })
    }
    const { contactId } = req.params
    const updContact = await contactsOperations.updateContact(contactId, req.body)
    if (!updContact) {
      return res.status(404).json({
        message: 'Not found',
      })
    }
    res.json({
      updContact,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = updateContact
