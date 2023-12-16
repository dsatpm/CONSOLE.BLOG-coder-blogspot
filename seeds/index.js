const seedComments = require('./commentData');
const seedPosts = require('./postData');
const seedUsers = require('./userData');
const sequelize = require('../config/connection');

const seedAllData = async () => {
  await sequelize.sync({ force: true });
  await seedComments();
  await seedPosts();
  await seedUsers();
  process.exit(0);
};

seedAllData();
