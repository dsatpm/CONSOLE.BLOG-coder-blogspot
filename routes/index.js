const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// Use API routes
router.use('/api', apiRoutes);
// Use home routes
router.use('/', homeRoutes);

module.exports = router;
