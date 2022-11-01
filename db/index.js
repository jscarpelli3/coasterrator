const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb://127.0.0.1:27017/coasterrater'
// 'mongodb+srv://coasterrator1:qwerty!@99@cluster0.xtgzrvn.mongodb.net/coaster'

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
