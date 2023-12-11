//  Models to be exported to the server
const Blog = require('./Blog');
const User = require('./User');

// Defines blog associations
Blog.belongsTo(User, {
    foreignKey: 'userId'
});

// Defines user associations
User.hasMany(Blog, {
    foreignKey: 'userId'
});

// Exports models
module.exports = { Blog, User };