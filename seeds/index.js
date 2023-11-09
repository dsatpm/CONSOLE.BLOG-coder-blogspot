// Imports sequelize connection and models
const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

// Seeds data
const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	// Creates users
	await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});

	// Creates blog posts
	await Blog.bulkCreate(blogData, {
		individualHooks: true,
		returning: true,
	});

	// Creates comments
	await Comment.bulkCreate(commentData, {
		individualHooks: true,
		returning: true,
	});
	process.exit(0);
};

seedDatabase();
