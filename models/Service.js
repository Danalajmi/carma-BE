const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: [
      "bodywork",
      "mechanical",
      "electrical",
      "hvac",
      "tyres",
      "maintenance",
      "performance",
      "detailing",
    ],
    required: true,
  },
})

const Service = mongoose.model("Service", serviceSchema)

module.exports = Service
