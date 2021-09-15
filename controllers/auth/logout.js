const { User } = require('../../models')

const logout = async (req, res, _next) => {
  await console.log(req.user)
  await User.findOneAndUpdate(req.user._id, { token: null })
  res.status(200).json({ message: 'Success logout' })
}

module.exports = logout
