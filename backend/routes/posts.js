const express = require('express');
const router = express.Router();

const { getAllPosts, getSinglePost, getAllCommentsFromPost, createPost, deletePost } = require('../db/queries/posts_queries.js');

router.get('/', getAllPosts);
router.get('/:id', getSinglePost);
router.get('/comments/:id', getAllCommentsFromPost);
router.post('/', createPost);
router.delete('/:id', deletePost);

module.exports = router;
