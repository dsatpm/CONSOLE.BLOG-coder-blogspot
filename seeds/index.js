const seedUsers = require('./user-seeds');
const seedPosts = require('./posts');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAllData = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};

seedAllData();
