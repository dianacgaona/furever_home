var express = require('express');
var router = express.Router();

const { createComment, editComment, deleteComment } = require('../db/queries/comments_queries.js');

router.post('/', createComment);
router.patch('/:id', editComment);
router.delete('/:id', deleteComment);

module.exports = router;
