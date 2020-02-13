const router = require('express').Router()
const users = require('../controllers/userController')
const trips = require('../controllers/tripsController')
const auth = require('../controllers/authController')
const secureRoute = require('../lib/SecureRoute')
const groups = require('../controllers/groupController')
const categories = require('../controllers/categoryController')

// Authentication
router.route('/login')
  .post(auth.login)

router.route('/register')
  .post(auth.register)

// Categories
router.route('/categories')
  .get(categories.getAllCategories)

router.route('/categories/:id')
  .get(categories.getCategory)

router.route('/categories/:id/like')
  .get(secureRoute, categories.likeCategory)

// Groups
router.route('/groups')
  .get(groups.getAllGroups)
  .post(secureRoute, groups.createGroup)

router.route('/groups/:id')
  .get(groups.getGroup)
  .put(secureRoute, groups.updateGroup)
  .delete(secureRoute, groups.deleteGroup)

router.route('/groups/:id/join')
  .get(secureRoute, groups.joinGroup)

router.route('/groups/:id/like')
  .get(secureRoute, groups.likeGroup)

// Trips
router.route('/trips')
  .get(trips.index)
  .post(secureRoute, trips.createTrip)

router.route('/trips/:id')
  .get(trips.showTrip)
  .put(secureRoute, trips.editTrip)
  .delete(secureRoute, trips.destroyTrip)
  
router.route('/trips/:id/interested')
  .get(secureRoute, trips.interestTrip)

router.route('/trips/:id/join')
  .get(secureRoute, trips.joinTrip)

// Users
router.route('/profile')
  .get(secureRoute, users.profile)
  .put(secureRoute, users.updateProfile)
  .delete(secureRoute, users.deleteUser)

router.route('/users')
  .get(users.getAllUsers)

router.route('/users/:id')
  .get(users.getUser)

router.route('/users/:id/like')
  .get(secureRoute, users.likeUser)

module.exports = router