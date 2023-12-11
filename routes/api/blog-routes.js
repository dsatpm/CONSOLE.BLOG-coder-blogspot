const router = require('express').Router();
const blogController = require('../../controllers/api/blog-controller');

// Define API routes for blog-related functionalities
router.get('/recent', blogController.getRecentBlogPosts);
// Other blog-related API routes...

module.exports = router;
