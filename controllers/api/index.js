//  Import router and all API routes
const router = require('express').Router();
const userRoutes = require('./user-routes');

// Use API routes
router.use('/users', userRoutes);

// Export router
module.exports = router;
