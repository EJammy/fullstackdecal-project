const mongoose = require("mongoose");

const ClassSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  professor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ratings: {
    type: Array,
    required: false,
  },
  comments: {
    type: Array,
    required: false,
  },
});

// export model user with ClassSchema
module.exports = mongoose.model("class", ClassSchema);
