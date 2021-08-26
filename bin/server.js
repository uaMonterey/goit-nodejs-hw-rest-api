const app = require('../app')
const mongoose = require('mongoose')

const DB_URL =
  'mongodb+srv://Monterey:L7mhlNQf9Vv86zHH@nodejs.i1wya.mongodb.net/db-contacts?retryWrites=true&w=majority'

const { PORT = 4000 } = process.env

mongoose
  .connect(DB_URL, () => {
    console.log('Database connection successful')
  })
  .then(
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  )
  .catch((error) => console.log(error))
