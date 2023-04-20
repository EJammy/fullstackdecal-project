const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
    required: false,
  },
  reviews: {
    type: Array,
    required: false,
  },
});
  // Add more fields for information on the user.

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
//module.exports = mongoose.model("shop", UserSchema);
