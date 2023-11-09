//  Models to be exported to the server
const Blog = require('./blog');
const User = require('./user');
const Comment = require('./comment');

// Defines blog associations
Blog.belongsTo(User, {
    foreignKey: 'userId'
});

Blog.hasMany(Comment, {
    foreignKey: 'blogId'
});

// Defines user associations
User.hasMany(Blog, {
    foreignKey: 'userId'
});

User.hasMany(Comment, {
  foreignKey: 'userId'
});

// Defines comment associations
Comment.belongsTo(User, {
    foreignKey: 'userId'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blogId'
});


// Exports models
module.exports = { Blog, User };