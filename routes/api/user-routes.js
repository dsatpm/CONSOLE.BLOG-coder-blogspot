const router = require('express').Router();
const userController = require('../../controllers/api/user-controller');

// Define API routes for user-related functionalities
router.get('/profile', userController.getUserProfile);
// Other user-related API routes...

module.exports = router;
