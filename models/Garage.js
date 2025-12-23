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
    // service: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "GarageService",
    //   required: true,
    // },

    carBrands: [{
      type: String,
      enum: [
        "audi",
        "bmw",
        "cadillac",
        "chevrolet",
        "chery",
        "chrysler",
        "dodge",
        "fiat",
        "ford",
        "gmc",
        "honda",
        "hyundai",
        "infiniti",
        "jaguar",
        "kia",
        "land rover",
        "lexus",
        "mazda",
        "mercedes-benz",
        "mini",
        "mitsubishi",
        "nissan",
        "porsche",
        "subaru",
        "tesla",
        "toyota",
        "volkswagen",
        "volvo",
      ],
      required: true,
    }],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Garage = mongoose.model("Garage", garageSchema)
module.exports = Garage
