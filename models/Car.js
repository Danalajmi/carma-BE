const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
  title: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  carBrand: { type: String, required: true },
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: "ServiceRequest" }],

})

const Car = mongoose.model("Car", carSchema)
module.exports = Car
