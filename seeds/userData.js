const { User } = require('../models');

const userData = [
	{
		username: 'Mick',
		password: 'password12345',
	},
	{
		username: 'Melanie',
		password: 'password12345',
	},
	{
		username: 'Sean',
		password: 'password12345',
	},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
