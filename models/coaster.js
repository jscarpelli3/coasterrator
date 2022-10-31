const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Coaster = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    name: { type: String, required: true },
    user: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Coaster', Coaster)
