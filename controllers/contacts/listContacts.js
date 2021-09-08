const { Contact } = require('../../models')

const listContacts = async (req, res, next) => {
  try {
    const listContacts = await Contact.find({})
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
