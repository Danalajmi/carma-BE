const ServiceRequest = require("../models/ServiceRequest")
const Car = require("../models/Car")
const Garage = require("../models/Garage")
const Service = require("../models/Service")
const { request } = require("express")

const getAllServiceReqs = async (req, res) => {
  try {
    let allServiceReqs = await ServiceRequest.find().populate("car")
    let mapthru = await Promise.all(
      allServiceReqs.map(async (request) => {
        let matchedGarages = await matchService(request)
        return { request, matchedGarages }
      })
    )
    res.send(mapthru)
  } catch (error) {
    throw error
  }
}
const getMyServices = async (req, res) => {
  try {

    let allServiceReqs = await ServiceRequest.find({owner: res.locals.token.id}).populate("car")
    let mapthru = await Promise.all(
      allServiceReqs.map(async (request) => {
        let matchedGarages = await matchService(request)
        return { request, matchedGarages }
      })
    )
    res.send(mapthru)
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
        owner: owner,
        car: car._id,
        service: req.body.service,
        description: req.body.description,
        owner: res.locals.token.id,
      })

      return res.send(serviceReq)
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
const matchService = async (req) => {
  let neededService = req.service
  let owner = req.car.owner
  let title = req.car.title
  let car = await Car.findOne({ owner, title })
  let garages = await Garage.find({
    // both of these are arrays and this checks if needed services and car.carBrand match up
    //https://stackoverflow.com/questions/18148166/find-document-with-array-that-contains-a-specific-value
    carBrands: { $in: [car.carBrand] },
    services: { $in: neededService },
  })
  return garages
}
module.exports = {
  getAllServiceReqs,
  createServiceReq,
  editServiceReq,
  getServiceRequestById,
  deleteServiceReq,
  getMyServices,
}
