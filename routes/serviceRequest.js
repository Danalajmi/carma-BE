const router = require("express").Router()
const serviceRequestController = require("../controllers/serviceRequestController")
const middleware = require("../middleware/auth")


router.get("/:id",serviceRequestController.getServiceRequestById)

router.get("/",
  middleware.stripToken,
  middleware.verifyToken,
  serviceRequestController.getAllServiceReqs)

router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  serviceRequestController.createServiceReq
)


router.put("/:id",
  middleware.stripToken,
  middleware.verifyToken,
  serviceRequestController.editServiceReq)


router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  serviceRequestController.deleteServiceReq
)


module.exports = router
