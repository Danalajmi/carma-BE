const router = require("express").Router()
const controller = require("../controllers/carController")
const serviceRequestController = require('../controllers/serviceRequestController')
const middleware = require("../middleware/auth")

router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.createCar
)

router.get(
  "/myCars",
  middleware.stripToken,
  middleware.verifyToken,
  controller.getCars
)

router.get(
  "/myCars/:title",
  middleware.stripToken,
  middleware.verifyToken,
  controller.getOne
)

router.put(
  "/myCars/:title",
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateCar
)

router.delete(
  "/myCars/:title",
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteOne
)

router.post(
  "/:title/request",
  middleware.stripToken,
  middleware.verifyToken,
  serviceRequestController.createServiceReq
)

router.get("/:title/reqs",
  middleware.stripToken,
  middleware.verifyToken,
  serviceRequestController.matchService,
  serviceRequestController.getAllServiceReqs)

module.exports = router
