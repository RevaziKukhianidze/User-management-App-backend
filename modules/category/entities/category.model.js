const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, "Please provide category name"],
  },
});

const category = mongoose.model("category", userSchema);
module.exports = category;
