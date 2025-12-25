const mongoose = require("mongoose")

const brandSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const CarBrand = mongoose.model("Brand", brandSchema)

module.exports = CarBrand
