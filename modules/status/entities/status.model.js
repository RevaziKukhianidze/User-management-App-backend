const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  statusName: {
    type: String,
    required: [true, "Please provide category status"],
  },
});

const status = mongoose.model("status", statusSchema);
module.exports = status;
