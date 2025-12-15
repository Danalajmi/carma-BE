const mongoose = require('mongoose')

const garageSchema = new mongoose.Schema({
  name:{type: string, required: true},
  location:{type: string, required: true},
  specialization:{type: string,enum: ['paint', 'etc'], required: true},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
})

const Garage = mongoose.model('Garage', garageSchema)
module.exports = Garage
