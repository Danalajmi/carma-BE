const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
  car: {type: mongoose.Schema.Types.ObjectId, ref: 'Car',required: true,},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true,},
  service: [{type: String,required: true,}],
  description: {type: String, required: true},
})

const Request = mongoose.model('Request', requestSchema)
module.exports = Request
