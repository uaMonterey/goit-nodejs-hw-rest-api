const updateContacts = require('./updateContacts')
const getAll = require('./getAll')

const removeContact = async (id) => {
  try {
    const contacts = await getAll()
    const idx = contacts.findIndex((item) => item.id === +id)
    if (idx === -1) {
      return null
    }
    const newContacts = contacts.filter((item) => item.id !== id)
    await updateContacts(newContacts)
    return contacts[idx]
  } catch (error) {
    console.log(error)
  }
}

module.exports = removeContact
