const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');
const { User, Post, Comment } = require('../models');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const user = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await Post.create({
            ...post,
            user_id: user[Math.floor(Math.random() * user.length)].id,
        });
    }

    const comment = await Comment.bulkCreate(commentData, {
        returning: true,
    });
    process.exit(0);
};

seedDatabase();