const Garage = require("../models/Garage")
const Service = require("../models/Service")
const CarBrand = require("../models/CarBrand")
const createGarage = async (req, res) => {
  try {
    let garageInfo = {
      name: req.body.name,
      location: req.body.location,
      phone: req.body.phone,
      description: req.body.description,
      services: req.body.services,
      carBrands: req.body.carBrands,
      owner: res.locals.token.id,
    }
    let garage = await Garage.create(garageInfo)
    res.send(garage)

  } catch (error) {
    console.log(error)
  }
}

const getAllGarages = async (req, res) => {
  let garages = await Garage.find()
  res.send(garages)

}

const getGarageById = async (req, res) => {

  let garage = await Garage.find({owner: res.locals.token.id})
  res.send(garage)

}

const updateGarage = async (req, res) => {
  let garage = await Garage.findByIdAndUpdate(req.params.id, req.body)
  res.send(garage)

}
const deleteGarage = async (req, res) => {
  let garage = await Garage.findByIdAndDelete(req.params.id)
  res.send({ message: "Garage deleted" })

}

module.exports = {
  getAllGarages,
  getGarageById,
  createGarage,
  updateGarage,
  deleteGarage,
}
