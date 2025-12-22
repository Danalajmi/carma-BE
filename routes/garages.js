const router = require("express").Router()
const garageController = require("../controllers/garageController")
const middleware = require("../middleware/auth")

router.get("/", garageController.getAllGarages)
router.get("/:id", garageController.getGarageById)
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  garageController.createGarage
)
router.put("/:id", garageController.updateGarage)
router.delete("/:id", garageController.deleteGarage)

module.exports = router

// note to self: make routes protected
