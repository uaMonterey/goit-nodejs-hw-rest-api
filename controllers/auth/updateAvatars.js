const fs = require('fs/promises')
const path = require('path')
const jimp = require('jimp')

const { User } = require('../../models')

const usersDir = path.join(__dirname, '../../', 'public/avatars')

const updateAvatar = async (req, res) => {
  // TODO: delete console log
  console.log(req.file)
  const { id } = req.params
  const { path: tempPath, originalname } = req.file
  const uploadPath = path.join(usersDir, `${id}-${originalname}`)
  try {
    const pic = await jimp.read(tempPath)
    await pic
      .autocrop()
      .cover(250, 250, jimp.HORIZONTAL_ALIGN_CENTER | jimp.VERTICAL_ALIGN_MIDDLE)
      .writeAsync(tempPath)
    await fs.rename(tempPath, uploadPath)
    const avatarURL = `/avatars/${id}${originalname}`
    await User.findByIdAndUpdate(id, { avatarURL })

    res.status(200).json({ status: 'success', code: 200, data: avatarURL })
  } catch (error) {
    await fs.unlink(tempPath)
    throw error
  }
}

module.exports = updateAvatar
