const mongoose = require('mongoose')

<<<<<<< HEAD
let MONGODB_URI = 'mongodb://127.0.0.1:27017/coasterrater'
// 'mongodb+srv://coasterrator1:qwerty!@99@cluster0.xtgzrvn.mongodb.net/coasters'
=======
let MONGODB_URI =
  'mongodb+srv://coasterrator1:qwerty99@cluster0.xtgzrvn.mongodb.net/coasters'
// 'mongodb://127.0.0.1:27017/coasterrater'
>>>>>>> 6aaf0bf943f5e331d2107a7db694f189e544cc0b

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
