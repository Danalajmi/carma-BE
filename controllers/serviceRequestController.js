const ServiceRequest = require ('../models/ServiceRequest')


const getAllServiceReqs = async (req,res) => {
console.log('Where are my services?')
}

const createServiceReq = async (req, res) => {
  const serviceReq = await ServiceRequest.create({
    car: req.body.car,
    service: req.body.service,
    description: req.body.description,
    owner: req.user.id
  })
res.send(ServiceRequest)
}

const editServiceReq = async (req,res) => {

}

module.exports = {
getAllServiceReqs,
createServiceReq,
editServiceReq
}
