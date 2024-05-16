const mongoose = require("mongoose");

const stallSchema = new mongoose.Schema({
  stallNumber: {
    type: Number,
    required: true,
  },
  status: { type: String, default: "available" },
});

const Stall = mongoose.model("Stall", stallSchema);

module.exports = Stall;
