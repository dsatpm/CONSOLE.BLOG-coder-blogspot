const { Blog, User } = require('../models');

const homeController = {
  renderLoginPage: (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('login');
  },
  getRecentBlogPosts: async (req, res) => {
    try {
      const recentPosts = await Blog.findAll({
        order: [['date_created', 'DESC']],
        include: [{ model: User, attributes: ['username'] }],
        limit: 5,
        where: {
          user_id: req.session.user_id,
        },
      });

      res.status(200).json(recentPosts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  renderHomePage: async (req, res) => {
    try {
      const blogData = await Blog.findAll({
        order: [['date_created', 'DESC']],
        include: [{ model: User, attributes: ['username'] }],
        limit: 5,
      });

      const data = blogData.map((blog) => blog.get({ plain: true }));

      res.render('home', {
        blogs: data,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = homeController;
