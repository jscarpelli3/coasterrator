const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    comment: { type: String, required: true },
    coaster_id: { type: Schema.Types.ObjectId, ref: 'Coaster' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', Comment)
