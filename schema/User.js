const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});
module.exports = mongoose.model("User", UserSchema);
