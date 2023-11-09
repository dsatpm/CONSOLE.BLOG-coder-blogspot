const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create blog model
class Blog extends Model {}

Blog.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'blog',
  }
);

module.exports = Blog;