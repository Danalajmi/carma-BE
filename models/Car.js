const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User',required: true,},
  model: {type: String, required: true},
  make: {type: String, required: true},
  year: {type: Number, required: true}

})

const Car = mongoose.model('Car', carSchema)
module.exports = Car
