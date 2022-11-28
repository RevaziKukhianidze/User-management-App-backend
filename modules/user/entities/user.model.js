const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please tell us you name"],
  },
  lastName: {
    type: String,
    required: [true, "Please tell us you surname"],
  },

  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide valid email"],
  },
  idNumber: String,
  birthDate: String,
  category: String,
  status: String,
});
const User = mongoose.model("User", userSchema);

module.exports = User;
