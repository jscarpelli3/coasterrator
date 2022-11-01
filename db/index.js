const mongoose = require('mongoose')

let MONGODB_URI =
  'mongodb+srv://coasterrator1:qwerty!@99@cluster0.xtgzrvn.mongodb.net/coasters'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
