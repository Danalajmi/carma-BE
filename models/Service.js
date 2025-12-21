const mongoose = require('mongoose')

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
      ]
    }
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service
