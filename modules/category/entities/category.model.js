const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, "Please provide category category"],
  },
});

const category = mongoose.model("category", categorySchema);
module.exports = category;
