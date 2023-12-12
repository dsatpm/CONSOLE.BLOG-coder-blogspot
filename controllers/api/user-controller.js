const { User } = require('../../models');

const userController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (user && user.validPassword(password)) {
        req.session.user_id = user.id;
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(400).json({ message: 'Incorrect email or password' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  logout: async (req, res) => {
    try {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  signup: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = await User.create({ username, email, password });

      req.session.user_id = newUser.id;
      res.status(200).json({ message: 'Signup successful' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
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
};

module.exports = userController;
