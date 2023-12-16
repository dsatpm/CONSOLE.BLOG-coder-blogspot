//  Models to be exported to the server
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// user has many posts
User.hasMany(Post, {
	foreignKey: 'userId',
	onDelete: 'CASCADE',
});

// user has many comments
User.hasMany(Comment, {
	foreignKey: 'userId',
});

// post belongs to user
Post.belongsTo(User, {
	foreignKey: 'userId',
	onDelete: 'CASCADE',
});

// post has many comments
Post.hasMany(Comment, {
	foreignKey: 'postId',
	onDelete: 'CASCADE',
});

// comment belongs to user
Comment.belongsTo(User, {
	foreignKey: 'userId',
	onDelete: 'CASCADE',
});

// comment belongs to post
Comment.belongsTo(Post, {
	foreignKey: 'postId',
	onDelete: 'CASCADE',
});

// Exports models
module.exports = { Post, User, Comment };
