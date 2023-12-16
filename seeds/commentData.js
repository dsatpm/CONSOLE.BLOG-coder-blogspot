const { Comment } = require('../models');

const commentData = [
  { content: 'Great post!', user_id: 1, post_id: 1 },
  { content: 'Interesting thoughts.', user_id: 2, post_id: 2 },
  { content: 'I learned something new!', user_id: 3, post_id: 3 },
  { content: 'Thanks for sharing!', user_id: 4, post_id: 4 },
  { content: 'Looking forward to more.', user_id: 5, post_id: 5 },
  { content: 'This is amazing!', user_id: 1, post_id: 2 },
  { content: "Can't agree more.", user_id: 2, post_id: 3 },
  { content: 'Impressive insights.', user_id: 3, post_id: 4 },
  { content: 'Incredible content!', user_id: 4, post_id: 5 },
  { content: 'Well written!', user_id: 5, post_id: 1 },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
