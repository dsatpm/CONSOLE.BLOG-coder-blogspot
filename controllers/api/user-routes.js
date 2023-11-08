const { User, Post, Edit, Delete, Comment } = require('../../models');
const router = require('express').Router();

function requireLogin(req, res, next) {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    next();
  }
}

// GET /api/users
router.get('/', (req, res) => {
  // logic to get all users
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
  // logic to get user by id
});

// POST /api/users
router.post('/', (req, res) => {
  // logic to create a new user
});

// PUT /api/users/:id
router.put('/:id', (req, res) => {
  // logic to update user by id
});

// DELETE /api/users/:id
router.delete('/:id', (req, res) => {
  // logic to delete user by id
});

module.exports = router;
