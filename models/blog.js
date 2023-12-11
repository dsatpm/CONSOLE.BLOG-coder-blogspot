const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_created: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Blog;