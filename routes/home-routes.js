const router = require('express').Router();
const homeController = require('../controllers/home-controller');

// Define routes for home-related functionalities
router.get('/', homeController.renderHomePage);
router.get('/login', homeController.renderLoginPage);
router.get('/signup', homeController.renderSignupPage);

module.exports = router;
