const { Blog, User } = require('../../models');

const blogController = {
  getRecentBlogPosts: async (req, res) => {
    try {
      const recentPosts = await Blog.findAll({
        order: [['date_created', 'DESC']],
        include: [{ model: User, attributes: ['username'] }],
        limit: 5,
      });

      res.status(200).json(recentPosts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = blogController;