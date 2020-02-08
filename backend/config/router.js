const router = require('express').Router()
const auth = require('../controllers/authController')
const users = require('../controllers/userController')
const secureRoute = require('../lib/SecureRoute')
const groups = require('../controllers/groupController')
const categories = require('../controllers/categoryController')

router.route('/register').post(auth.register)

router.route('/login').post(auth.login)

router.route('/profile').get(secureRoute, users.profile)

module.exports = router