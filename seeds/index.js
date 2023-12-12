const sequelize = require('../config/connection');
const { User, Blog } = require('../models');
const userData = require('./userData.json');
const blogData = require('./blogData.json');

// seeds/index.js
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Creates users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Creates blog posts
  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
