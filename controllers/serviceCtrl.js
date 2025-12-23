const Service = require("../models/Service")

// Create a Service
const createService = async (req, res) => {
  try {
    let { type } = req.body
    let existingService = await Service.exists({ type })
    if (existingService) {
      return res.send({ msg: "this service already exists" })
    }
    let service = await Service.create({ type })
    res.send(service)
  } catch (error) {
    throw error
  }
}

// Get all Services
const gatAllServices = async (req, res) => {
  try {
    let allServices = await Service.find()
    res.send(allServices)
  } catch (error) {}
}

// Get one Service
// I dont think we need this
const getAService = async (req, res) => {}

// update a Service
// I dont think we need this
const updateService = async (req, res) => {}

// delete a Service
const deleteService = async (req, res) => {
  try {
    let { type } = req.params
    let service = await Service.findOneAndDelete({ type })
    if (!service) {
      return res.send({ msg: `Couldn't find ${type}` })
    }
    res.send({ msg: `${type} Deleted Succesfully!`, service })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createService,
  getAService,
  gatAllServices,
  updateService,
  deleteService,
}
