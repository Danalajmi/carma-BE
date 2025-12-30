const router = require("express").Router()
const garageController = require("../controllers/garageController")
const middleware = require("../middleware/auth")

router.get("/", garageController.getAllGarages)
router.get("/myGarages",middleware.stripToken,
  middleware.verifyToken, garageController.getGarageById)

router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  garageController.createGarage
)
router.put(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  garageController.updateGarage
)
router.delete(
  "/:id",
  middleware.stripToken,
  middleware.verifyToken,
  garageController.deleteGarage
)

module.exports = router

// note to self: make routes protected
