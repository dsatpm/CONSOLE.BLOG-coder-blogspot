const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const sequelize = require('../config/connection');

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    const getPosts = await Post.findAll({
      attributes: ['id', 'title', 'content', 'date_created'],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment', 'post_id', 'user_id', 'date_created'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const allPosts = getPosts.map((post) => post.get({ plain: true }));
    res.render('homepage', { allPosts, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get login page, unless user is not logged in
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// get signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

// get post by id, unless user is not logged in
router.get('/post/:id', async (req, res) => {
  try {
    const getPostById = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'content', 'date_created'],
      // include models here
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment', 'post_id', 'user_id', 'date_created'],
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const getSinglePost = await getPostById;
    if (!getSinglePost) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    // serialize data before passing to handlebars template
    const post = getSinglePost.get({ plain: true });
    console.log(post);
    res.render('single-post', { post, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
