const app = require('../app')
const mongoose = require('mongoose')

require('dotenv').config()

const { DB_HOST } = process.env
const { PORT = 4000 } = process.env

mongoose
  .connect(DB_HOST, () => {
    console.log('Database connection successful')
  })
  .then(
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  )
  .catch((error) => console.log(error))
