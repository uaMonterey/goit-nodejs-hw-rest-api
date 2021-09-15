const bcrypt = require('bcrypt')
const { Conflict } = require('http-errors')
const { User } = require('../../models')

const register = async (req, res, _next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Already register')
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  await User.create({ email, password: hashPassword })

  res.status(201).json({
    status: 'Success',
    code: 201,
    message: 'Success register',
  })
}

module.exports = register
