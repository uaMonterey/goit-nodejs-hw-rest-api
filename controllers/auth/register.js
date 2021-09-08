const { User } = require('../../models/user')

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body
    console.log(email)
    const user = await User.findOne({ email })
    if (user) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Already register',
      })
    }
    const result = await User.create({ email, password })
    res.status(201).json({
      status: 'Success',
      code: 201,
      message: 'Success register',
    })
  } catch (error) {
    next(error)
  }
}

module.exports = register
