//  Models to be exported to the server
const Blog = require('./Blog');
const User = require('./User');

// Defines blog associations
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

// Defines user associations
User.hasMany(Blog, {
    foreignKey: 'user_id'
});

// Exports models
module.exports = { Blog, User };