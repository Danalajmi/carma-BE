const router = require('express').Router()
const controller = require('../controllers/auth')
const middleware = require('../middleware/auth')

router.post('/register', controller.register)
router.post('/login', controller.login)

module.exports = router
