const router = require("express").Router()
const controller = require("../controllers/serviceCtrl")
const middleware = require("../middleware/auth")

// This should only be viewed/accessed by Admin

router.post(
  "/",
  middleware.stripToken,
  middleware.verifyAdmin,
  controller.createService
)
router.get(
  "/",
  middleware.stripToken,
  middleware.verifyAdmin,
  controller.gatAllServices
)
router.delete(
  "/:type",
  middleware.stripToken,
  middleware.verifyAdmin,
  controller.deleteService
)

module.exports = router
