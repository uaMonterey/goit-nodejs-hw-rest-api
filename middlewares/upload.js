const multer = require('multer')
const path = require('path')

const tempDir = path.join(__dirname, '../', 'temp')
const multerConfig = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, tempDir)
  },
  filename: (_req, _file, cb) => {
    cb(null, `${Date.now().toString()}-\${file.originalname}`)
  },
  limits: {
    fileSize: 1024,
  },
})

const upload = multer({
  storage: multerConfig,
  //   fileFilter: (_req, file, cb) => {
  //     if (file.mimetype.includes('image')) {
  //       cb(null, true)
  //       return
  //     }
  //     const error = new Error('Wrong format file for avatar')
  //     error.status = 400
  //     cb(error)
  //   },
})

module.exports = upload
