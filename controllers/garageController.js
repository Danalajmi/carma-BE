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
  console.log("This is CREATE garage")
}
const getAllGarages = async (req, res) => {
  console.log("This is GET all garages")
}
const getGarageById = async (req, res) => {
  console.log("This is GET garage by id")
}
const updateGarage = async (req, res) => {
  console.log("This is UPDATE garage")
}
const deleteGarage = async (req, res) => {
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
