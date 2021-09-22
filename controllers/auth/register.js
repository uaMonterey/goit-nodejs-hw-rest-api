const bcrypt = require('bcrypt')
const { Conflict } = require('http-errors')
const { User } = require('../../models')

const register = async (req, res) => {
  const { email, password, avatarURL } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Already register')
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const result = await User.create({ email, password: hashPassword, avatarURL })

  return res.status(201).json({
    status: 'Success',
    code: 201,
    message: 'Success register',
    data: { email, avatarURL: result.avatarURL },
  })
}

module.exports = register
