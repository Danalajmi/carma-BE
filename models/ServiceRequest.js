const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
  car: {type: mongoose.Schema.Types.ObjectId, ref: 'Car',required: true,},
  service: {type: mongoose.Schema.Types.ObjectId, ref: 'Service',required: true,},
  description: {type: String, required: true},
})

const Request = mongoose.model('Request', requestSchema)
module.exports = Request
