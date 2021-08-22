const updateProducts = require('./updateContacts')
const getAll = require('./getAll')

const del = async (id) => {
  try {
    const contacts = await getAll()
    console.log(contacts)
    console.log(id)
    const idx = contacts.findIndex((item) => item.id === +id)
    if (idx === -1) {
      // throw new Error(`Contact with id=${id} not found`)
      return null
    }
    const newContacts = contacts.filter((item) => item.id !== id)
    // const delContact = contacts.splice(idx, 1);
    await updateProducts(newContacts)
    return contacts[idx]
  } catch (error) {
    // throw error
    console.log(error)
  }
}

module.exports = del
