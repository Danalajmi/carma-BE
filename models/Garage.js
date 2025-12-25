const mongoose = require("mongoose")

const garageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    services: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Services",
        required: true,
      },
    ],

    carBrands: [
      { type: mongoose.Schema.Types.ObjectId, ref: "CarBrand", required: true },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    interest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceRequest",
    },
  },
  {
    timestamps: true,
  }
)

const Garage = mongoose.model("Garage", garageSchema)
module.exports = Garage
