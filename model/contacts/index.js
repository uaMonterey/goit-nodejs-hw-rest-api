const listContacts = require('./getAll')

const getContactById = require('./getById')

const updateContact = require('./update')

const removeContact = require('./delete')

const addContact = require('./add')

module.exports = {
  listContacts,
  getContactById,
  updateContact,
  removeContact,
  addContact,
}
