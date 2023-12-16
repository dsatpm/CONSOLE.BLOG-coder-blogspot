const { Post } = require('../models');

const postData = [
  {
    title: 'The Art of Coding',
    content:
      'Exploring the beauty of coding and its impact on the digital world.',
    user_id: 1,
  },
  {
    title: 'JavaScript: Unraveling the Mysteries',
    content:
      'Diving deep into the world of JavaScript and its versatile applications.',
    user_id: 2,
  },
  {
    title: 'Data Analytics: A Practical Guide',
    content:
      'Practical tips and insights into the realm of data analytics for aspiring analysts.',
    user_id: 3,
  },
  {
    title: 'Building Responsive Web Designs with CSS',
    content:
      'Mastering CSS techniques for creating visually stunning and responsive web designs.',
    user_id: 4,
  },
  {
    title: 'SQL Fundamentals for Beginners',
    content:
      "A beginner's guide to understanding and using SQL for effective database management.",
    user_id: 5,
  },
  {
    title: 'Exploring Frontend Frameworks: React vs. Vue',
    content:
      'Comparing the features and advantages of React and Vue for frontend development.',
    user_id: 1,
  },
  {
    title: 'The Evolution of Full Stack Development',
    content:
      'Tracing the evolution of full stack development and its impact on modern applications.',
    user_id: 2,
  },
  {
    title: 'Mastering the Art of Code Reviews',
    content:
      'Best practices and strategies for effective code reviews in collaborative projects.',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
