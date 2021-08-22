const getAll = require('./getAll')

const getById = async (id) => {
  try {
    const contacts = await getAll()
    const selectContact = contacts.find((item) => item.id === +id)
    if (!selectContact) {
      // throw new Error(`Contact with id=${id} not found`)
      return null
    }
    return selectContact
  } catch (error) {
    // throw error
    console.log(error)
  }
}

module.exports = getById
