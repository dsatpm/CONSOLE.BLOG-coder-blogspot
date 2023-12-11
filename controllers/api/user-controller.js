const { User } = require('../../models');

const userController = {
  getUserProfile: async (req, res) => {
    try {
      const userId = req.session.user_id;
      if (!userId) {
        return res.status(401).json({ message: 'Not logged in' });
      }

      const user = await User.findByPk(userId, {
        attributes: { exclude: ['password'] },
      });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Other methods for user registration, login, and logout...
};

module.exports = userController;