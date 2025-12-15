const mongoose = require('mongoose')

const garageServiceSchema = new mongoose.Schema({
  garage: {type: mongoose.Schema.Types.ObjectId, ref: 'Garage',required: true,},
  service: {type: mongoose.Schema.Types.ObjectId, ref: 'Service',required: true,},
})

const GarageService = mongoose.model('GarageService', garageServiceSchema)
module.exports = GarageService
