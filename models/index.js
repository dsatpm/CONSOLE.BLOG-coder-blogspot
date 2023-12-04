//  Models to be exported to the server
const Blog = require('./blog');
const User = require('./user');

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