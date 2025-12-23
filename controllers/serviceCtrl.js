const Service = require("../models/Service")

// Create a Service
const createService = async (req, res) => {
  try {
    let { service } = req.body
    let existingService = await Service.exists({ service })
    if (existingService) {
      return res.send({ msg: "this service already exists" })
    }
    let newService = await Service.create({ service })
    res.send(newService)
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
    let { service } = req.params
    let oldService = await Service.findOneAndDelete({ service })
    if (!service) {
      return res.send({ msg: `Couldn't find ${service}` })
    }
    res.send({ msg: `${service} Deleted Succesfully!`, oldService })
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
