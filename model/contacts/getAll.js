const fs = require('fs/promises')
const path = require('path')

const filePath = path.join(__dirname, 'contacts.json')

const getAll = async () => {
  try {
    const data = await fs.readFile(filePath)
    const contacts = JSON.parse(data)
    return contacts
  } catch (error) {
    console.log(error)
  }
}

module.exports = getAll
