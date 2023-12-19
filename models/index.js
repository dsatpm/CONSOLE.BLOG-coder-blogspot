//  Models to be exported to the server
const Post = require('./post');
const User = require('./user');
const Comment = require('./comment');

// user has many posts
User.hasMany(Post, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE',
});

// user has many comments
User.hasMany(Comment, {
	foreignKey: 'user_id',
});

// post belongs to user
Post.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE',
});

// post has many comments
Post.hasMany(Comment, {
	foreignKey: 'post_id',
	onDelete: 'CASCADE',
});

// comment belongs to user
Comment.belongsTo(User, {
	foreignKey: 'user_id',
	onDelete: 'CASCADE',
});

// comment belongs to post
Comment.belongsTo(Post, {
	foreignKey: 'post_id',
	onDelete: 'CASCADE',
});

// Exports models
module.exports = { Post, User, Comment };
