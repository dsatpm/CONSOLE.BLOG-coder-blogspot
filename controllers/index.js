// Imports router, API routes, and home routes
const router = require('express').Router();
const apiRoutes = require('./api');

// Use routes
router.use('/api', apiRoutes);

// Export router
module.exports = router;