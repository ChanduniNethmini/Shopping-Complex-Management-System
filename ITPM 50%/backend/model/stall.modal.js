const mongoose = require("mongoose");

const stallSchema = new mongoose.Schema({
  status: { type: String, default: "available" },
});

const Stall = mongoose.model("Stall", stallSchema);

module.exports = Stall;
