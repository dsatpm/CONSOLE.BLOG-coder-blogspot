const { Comment } = require('../models');

const commentData = [
	{
		comment: 'What is MVC Framework?',
		user_id: 1,
		post_id: 1,
	},
	{
		comment: 'What are the Cookies?',
		user_id: 2,
		post_id: 2,
	},
	{
		comment: 'What is a template engine?',
		user_id: 3,
		post_id: 3,
	},
];

const seedComments = () => Comment.bulkCreate(commentData, { fields: ['comment', 'user_id', 'post_id']});

module.exports = seedComments;
