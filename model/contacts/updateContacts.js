const fs = require('fs/promises')

const filePath = require('./getAll')

const updateContacts = async (contacts) => {
  const contactsString = JSON.stringify(contacts)
  await fs.writeFile(filePath, contactsString)
}

module.exports = updateContacts
