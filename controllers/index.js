// Imports router, API routes, and home routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// Use routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Export router
module.exports = router;