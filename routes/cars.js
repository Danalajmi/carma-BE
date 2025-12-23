const router = require("express").Router()
const controller = require("../controllers/carController")
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

module.exports = router
