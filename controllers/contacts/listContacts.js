const contactsOperations = require('../../model/contacts')

const listContacts = async (req, res, next) => {
  try {
    const listContacts = await contactsOperations.listContacts()
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: listContacts,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = listContacts
