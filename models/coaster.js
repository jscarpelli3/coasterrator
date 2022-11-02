const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Coaster = new Schema(
  {
    name: { type: String, required: true },
    themePark: { type: String, required: true },
    height: { type: Number, required: false },
    largestDrop: { type: Number, required: false },
    steepestAngle: { type: Number, required: false },
    speed: { type: Number, required: false },
    inversions: { type: Number, required: false },
    image: { type: String, required: false },
    score: { type: Number, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coaster", Coaster);
