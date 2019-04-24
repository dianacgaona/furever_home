const express = require('express');
const router = express.Router();

const {
  getAllPosts,
  getAllPostsbyUser,
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
router.get('/byUser/:id', getAllPostsbyUser);
router.get('/:id', getSinglePost);
router.delete('/:id', deletePost);

module.exports = router;
