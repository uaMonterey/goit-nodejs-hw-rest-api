const getAll = require('./getAll')

const getById = async (id) => {
  try {
    const contacts = await getAll()
    const selectContact = contacts.find((item) => item.id === +id)
    if (!selectContact) {
      return null
    }
    return selectContact
  } catch (error) {
    console.log(error)
  }
}

module.exports = getById
