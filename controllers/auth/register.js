const bcrypt = require('bcrypt')
const { Conflict } = require('http-errors')
const { User } = require('../../models')
const fs = require('fs/promises')
const path = require('path')

const usersDir = path.join(__dirname, '../../', 'public/avatars')

const register = async (req, res) => {
  const { id, email, password, avatarURL } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Already register')
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const result = await User.create({ email, password: hashPassword, avatarURL, id })

  const idUser = result.id.toString()
  const avatarPath = path.join(usersDir, idUser)
  await fs.mkdir(avatarPath)

  return res.status(201).json({
    status: 'Success',
    code: 201,
    message: 'Success register',
    data: { email, avatarURL: result.avatarURL },
  })
}

module.exports = register
