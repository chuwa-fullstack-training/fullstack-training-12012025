const express = require('express');
const {
  getAllPostsByUser,
  getPostByUser,
  createPost
} = require('../controllers/post');
const { requireJwt } = require('../middlewares/auth');
const router = express.Router();

router.get('/', requireJwt, getAllPostsByUser);
router.get('/:id', requireJwt, getPostByUser);
router.post('/', requireJwt, createPost);

module.exports = router;
