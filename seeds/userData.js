const { User } = require('../models');

const userData = [
  {
    username: 'Elena',
    password: 'password12345',
  },
  {
    username: 'Kai',
    password: 'password12345',
  },
  {
    username: 'Nina',
    password: 'password12345',
  },
  {
    username: 'Raj',
    password: 'password12345',
  },
  {
    username: 'Zara',
    password: 'password12345',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
