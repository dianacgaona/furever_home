var express = require('express');
var router = express.Router();

const { favorited, deleteFavorite, getAllFavoritesFromPost } = require('../db/queries/likes_queries.js');

router.post('/', favorited);
router.delete('/:id', deleteFavorite);
router.get('/post/:id', getAllFavoritesFromPost);

module.exports = router;
