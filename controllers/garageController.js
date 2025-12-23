const Garage = require("../models/Garage")
const Service = require("../models/Service")
const createGarage = async (req, res) => {
  let garageInfo = {
    name: req.body.name,
    location: req.body.location,
    phone: req.body.phone,
    description: req.body.description,
    service: req.body.service,
    carBrands: req.body.carBrands,
    owner: req.user.id
  }
  console.log(req)
  let garage = await Garage.create(garageInfo)
  res.send(garage)
  let garageInfo = {
    name: req.body.name,
    location: req.body.location,
    phone: req.body.phone,
    description: req.body.description,
    service: req.body.service,
    carBrands: req.body.carBrands,
    owner: res.locals.token.id,
  }
  let garage = await Garage.create(garageInfo)
  res.send(garage)
  console.log("This is CREATE garage")
}
const getAllGarages = async (req, res) => {
  let garages = await Garage.find()
  res.send(garages)
  console.log("This is GET all garages")
}
const getGarageById = async (req, res) => {
  let garage = await Garage.findById(req.params.id)
  res.send(garage)
  console.log("This is GET garage by id")
}
const updateGarage = async (req, res) => {
  let garage = await Garage.findByIdAndUpdate(req.params.id, req.body)
  res.send(garage)
  console.log("This is UPDATE garage")
}
const deleteGarage = async (req, res) => {
  let garage = await Garage.findByIdAndDelete(req.params.id)
  res.send({ message: "Garage deleted" })
  console.log("This is DELETE garage")
}
const matchGarage = async (req,res) => {
  let matchedGarages = await GarageService.find({service: req.body}).populate(Garage)
}
module.exports = {
  getAllGarages,
  getGarageById,
  createGarage,
  updateGarage,
  deleteGarage,
}
