const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { BadRequest } = require('http-errors')
const { User } = require('../../models/user')

const login = async (req, res, _next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    throw new BadRequest('Wrong email')
  }

  const hashPassword = user.password
  const compareResult = bcrypt.compareSync(password, hashPassword)
  if (!compareResult) {
    throw new BadRequest('Wrong password')
  }

  const payload = { id: user._id }
  const { SECRET_KEY } = process.env

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' })
  await User.findByIdAndUpdate(user._id, { token })
  return res.status(200).json({ message: 'Success login', token })
}
module.exports = login
