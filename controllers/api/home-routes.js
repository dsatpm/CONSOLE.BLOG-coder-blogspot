// Import router and all API routes
const router = require('express').Router();
const { Blog } = require('../../models');

// Home Route
router.get('/', async (req, res) => {
	try {
		console.log('Is this working?');
		const blogData = await Blog.findAll({
			order: [['date_created', 'DESC']],
			include: [{ model: User, attributes: ['username'] }],
			where: {
				user_id: req.session.user_id,
			},
		});
		res.status(200).json(blogData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Finds a single blog post by its `id`
router.get('/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [{ model: User, attributes: ['username'] }],
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Route
router.get('/login', async (req, res) => {
	try {
		res.render('login', { hideNavbar: true, hideFooter: true });
	} catch (err) {
		res.status(500).json(err);
	}
});

// Logout Route
router.get('/logout', (req, res) => {
	req.session.destroy();
	res.redirect('/login');
});

// Signup Route
router.get('/signup', async (req, res) => {
	try {
		res.render('signup', { hideNavbar: true, hideFooter: true });
	} catch (err) {
		res.status(500).json(err);
	}
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
