const ServiceRequest = require ('../models/ServiceRequest')


const getAllServiceReqs = async (req, res) => {
  try {
    let allServiceReqs = await ServiceRequest.find()
    res.send(allServiceReqs)
  } catch (error) {}
}

const getServiceRequestById = async (req, res) => {
  let serviceReq = await ServiceRequest.findById(req.params.id)
  res.send(serviceReq)

}


const createServiceReq = async (req, res) => {
  try {
    const serviceReq = await ServiceRequest.create({
    car: req.body.car,
    service: req.body.service,
    description: req.body.description,
    owner: res.locals.token.id
  })
  console.log(serviceReq)
res.send(serviceReq)
  } catch (error) {
    console.log(error)
  }
}

const editServiceReq = async (req,res) => {
 let editAServiceReq = await ServiceRequest.findByIdAndUpdate(req.params.id, req.body)
  res.send(editAServiceReq)
}

const deleteServiceReq = async (req, res) => {
  let deleteAServiceReq = await ServiceRequest.findByIdAndDelete(req.params.id)
  res.send(deleteAServiceReq)}

module.exports = {
getAllServiceReqs,
createServiceReq,
editServiceReq,
getServiceRequestById,
deleteServiceReq
}
