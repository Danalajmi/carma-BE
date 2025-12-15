const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password_digest: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
  role: {type: String, enum:['Car Owner', 'Service Provider'],required: true},

})

const User = mongoose.model('User', userSchema)
module.exports = User
