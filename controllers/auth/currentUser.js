const { User } = require('../../models')
const { Unauthorized } = require('http-errors')

const currentUser = async (req, res, _next) => {
  const [bearer, token] = req.headers.authorization.split(' ')
  if (bearer !== 'Bearer') {
    throw new Unauthorized()
  }

  const { email, subscription } = await User.findOne({ token })
  res.status(200).json({
    status: 'success',
    code: 200,
    ContentType: 'application/json',
    ResponseBody: { email, subscription },
  })
}
module.exports = currentUser
