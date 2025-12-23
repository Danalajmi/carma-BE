const router = require("express").Router()
const serviceRequestController = require("../controllers/serviceRequestController")


router.get("/service-reqs", serviceRequestController.getAllServiceReqs)
router.post("/service-reqs/new", serviceRequestController.createServiceReq)

