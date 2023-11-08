const Blog = require('./blog');
const User = require('./user');
const Comment = require('./comment');


Blog.belongsTo(User, {
    foreignKey: 'userId'
});

Blog.hasMany(Comment, {
    foreignKey: 'blogId'
});

User.hasMany(Blog, {
    foreignKey: 'userId'
});

User.hasMany(Comment, {
  foreignKey: 'userId'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blogId'
});



module.exports = { Blog, User };