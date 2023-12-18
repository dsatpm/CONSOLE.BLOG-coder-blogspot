const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// gets all comments
router.get('/', async (req, res) => {
  try {
    const getComments = await Comment.findAll();
    const comments = await getComments;

    res.status(200).json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// gets single comment by id
router.get('/:id', async (req, res) => {
  try {
    const getCommentById = await Comment.findAll({
      where: {
        id: req.params.id,
      },
    });
    const receivedComment = await getCommentById;
    res.status(200).json(receivedComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// creates new comment
router.post('/', withAuth, async (req, res) => {
  if (req.session) {
    try {
      const postComment = await Comment.create({
        comment: req.body.comment,
        post_id: req.body.post_id,
        user_id: req.session.user_id,
      });
      const createdComment = await postComment;
      res.status(200).json(createdComment);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
});

// updates comment
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateComment = await Comment.update(
      {
        comment: req.body.comment,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    const updatedComment = await updateComment;
    res.status(200).json(updatedComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// deletes comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    const deletedComment = await deleteComment;
    res.status(200).json(deletedComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;