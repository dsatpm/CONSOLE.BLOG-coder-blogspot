const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create comment model
class Comment extends Model {}

Comment.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'comment',
  }
);

module.exports = Comment;