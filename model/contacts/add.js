const { v4 } = require('uuid')

const getAll = require('./getAll')
const updateContacts = require('./update')

const add = async (data) => {
  try {
    const newContact = { id: v4(), ...data }
    const contacts = await getAll()
    contacts.push(newContact)
    await updateContacts(contacts)
    return newContact
  } catch (error) {
    console.log(error)
  }
}

module.exports = add
