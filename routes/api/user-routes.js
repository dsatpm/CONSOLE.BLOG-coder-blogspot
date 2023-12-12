const router = require('express').Router();
const userController = require('../../controllers/api/user-controller');

// Login route
router.post('/login', userController.login);
// Logout route
router.post('/logout', userController.logout);
// Signup route
router.post('/signup', userController.signup);
// Get user profile route
router.get('/profile', userController.getUserProfile);

module.exports = router;
