const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const currentUser = require('./currentUser')
const updateAvatar = require('./updateAvatars')

module.exports = {
  register,
  login,
  logout,
  currentUser,
  updateAvatar,
}
