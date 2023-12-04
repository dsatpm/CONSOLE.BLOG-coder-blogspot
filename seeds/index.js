// Imports sequelize connection and models
const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

// Seeds data
const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	// Creates users
	await User.bulkCreate({
		individualHooks: true,
		returning: true,
	});

	// Creates blog posts
	await Blog.bulkCreate({
		individualHooks: true,
		returning: true,
	});

	process.exit(0);
};

seedDatabase();
