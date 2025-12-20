const router = require("express").Router()
const garageController = require("../controllers/garageController")


router.get("/", garageController.getAllGarages)
router.get("/:id", garageController.getGarageById)
router.post("/", garageController.createGarage)
router.put("/:id", garageController.updateGarage)
router.delete("/:id", garageController.deleteGarage)


module.exports = router

// note to self: make routes protected
