const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Please provide category category"],
    },
  },
  {
    versionKey: false,
  }
);

const category = mongoose.model("category", categorySchema);
module.exports = category;
