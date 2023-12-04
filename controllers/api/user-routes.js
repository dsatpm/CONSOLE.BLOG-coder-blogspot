// Imports models and router
const { User, Blog } = require('../../models');
const router = require('express').Router();

// Authorization middleware
function requireLogin(req, res, next) {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
}

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body)

    // Create a new user
    const newUser = await User.create({
      username,
      password,
    });
    

    // Set up session variables
    req.session.user = newUser;
    req.session.loggedIn = true;

    res.status(200).json(newUser);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// POST new post
router.post('/blog', requireLogin, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(400).end();
  }
});

module.exports = router;
