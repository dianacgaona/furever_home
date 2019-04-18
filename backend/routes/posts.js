const express = require('express');
const router = express.Router();

const {
  getAllPosts,
  getAllDogPosts,
  getAllCatPosts,
  getSinglePost,
  createPost,
  deletePost,
} = require('../db/queries/posts_queries.js');

router.get('/', getAllPosts);
router.get('/dogs', getAllDogPosts);
router.get('/cats', getAllCatPosts);
router.post('/', createPost);
router.get('/:id', getSinglePost);
router.delete('/:id', deletePost);

module.exports = router;
