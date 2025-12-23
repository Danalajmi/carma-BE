const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: {type: String, required: true},
  carBrand: [
    {
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
    },
  ],
  model: { type: String, required: true },
  year: { type: Number, required: true },
})

const Car = mongoose.model("Car", carSchema)
module.exports = Car
