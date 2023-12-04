// Import router and all API routes
const router = require('express').Router();

// Home Route
router.get('/', async (req, res) => {
	res.redirect('home');
});

// Login Route
router.get('/login', async (req, res) => {
	res.render('login', { hideNavbar: true, hideFooter: true });
});

// Logout Route
router.get('/logout', (req, res) => {
	req.session.destroy();
	res.redirect('/login');
});

// Signup Route
router.get('/signup', async (req, res) => {
	res.render('signup', { hideNavbar: true, hideFooter: true });
});

// Home Route
router.get('/home', (req, res) => {
	res.render('home');
});

// Blog route
router.get('/blog', (req, res) => {
	if (!req.session.loggedIn) {
	return res.redirect('/login');
}
	res.render('blog');
});

module.exports = router;
