const updateContacts = require('./updateContacts')
const getAll = require('./getAll')

const update = async (id, updateInfo) => {
  try {
    const contacts = await getAll()
    const idx = contacts.findIndex((item) => item.id === id)
    if (idx === -1) {
      // throw new Error(`Contact with id=${id} not found`)
      return null
    }
    contacts[idx] = { ...contacts[idx], ...updateInfo }

    await updateContacts(contacts)
    return contacts[idx]
  } catch (error) {
    // throw error
    console.log(error)
  }
}

module.exports = update
