const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const userDashboard = await Post.findAll({
      where: {
        user_id: req.session.user_id,
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
    // serialize data before passing to handlebars template
    const makeDashboard = await userDashboard;
    const userPosts = makeDashboard.map((post) => post.get({ plain: true }));
    res.render('dashboard', { userPosts, logged_in: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get a single post by id for dashboard
router.get('/:id', withAuth, async (req, res) => {
  try {
    const editUserPost = await Post.findOne({
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
    const newEdit = await editUserPost;
    if (!newEdit) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    // serialize data before passing to handlebars template
    const userPost = newEdit.get({ plain: true });
    res.render('edit-post', { userPost, logged_in: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// gets new post
router.get('/new', (req, res) => {
  res.render('new-post');
});

module.exports = router;