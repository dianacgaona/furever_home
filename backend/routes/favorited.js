var express = require('express');
var router = express.Router();

const { createfavorite, deleteFavorite, getAllFavoritesFromUser } = require('../db/queries/favorited_queries.js');

router.post('/', createfavorite);
router.delete('/:id', deleteFavorite);
router.get('/users/:id', getAllFavoritesFromUser);

module.exports = router;
