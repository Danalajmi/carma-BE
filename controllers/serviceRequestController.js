const ServiceRequest = require("../models/ServiceRequest")
const Car = require("../models/Car")
const Garage = require("../models/Garage")
const getAllServiceReqs = async (req, res) => {
  try {
    let allServiceReqs = await ServiceRequest.find()
    res.send(allServiceReqs)
  } catch (error) {
    throw error
  }
}
const getServiceRequestById = async (req, res) => {
  let serviceReq = await ServiceRequest.findById(req.params.id)
  res.send(serviceReq)
}
const createServiceReq = async (req, res) => {
  try {
    let owner = res.locals.token.id
    let title = req.params.title
    let car = await Car.findOne({ owner, title })
    if (car) {
      const serviceReq = await ServiceRequest.create({
        car: car._id,
        service: req.body.service,
        description: req.body.description,
        owner: res.locals.token.id,
      })
      res.send(serviceReq)
    }
    return res.send({ msg: "This car doesn't exist" })
  } catch (error) {
    throw error
  }
}
const editServiceReq = async (req, res) => {
  let editAServiceReq = await ServiceRequest.findByIdAndUpdate(
    req.params.id,
    req.body
  )
  res.send(editAServiceReq)
}
const deleteServiceReq = async (req, res) => {
  let deleteAServiceReq = await ServiceRequest.findByIdAndDelete(req.params.id)
  res.send(deleteAServiceReq)
}
const matchService = async (req, res, next) => {
  let neededService = req.body.services
  let owner = res.locals.token.id
  let title = req.params.title
  let car = await Car.findOne({ owner, title })
  console.log(car)
  let garages = await Garage.find({
    carBrands: car.carBrand,
    services: neededService,
  }).populate("services")
  res.send(garages)
  next()
}
module.exports = {
  getAllServiceReqs,
  createServiceReq,
  editServiceReq,
  getServiceRequestById,
  deleteServiceReq,
  matchService,
}
