const router = require('express').Router();
const homeController = require('../controllers/home-controller');

// Define routes for home-related functionalities
router.get('/', homeController.renderHomePage);
// Other home-related routes...

module.exports = router;
