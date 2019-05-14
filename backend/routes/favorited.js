var express = require('express');
var router = express.Router();

const { createfavorite, deleteFavorite, getAllFavoritesFromUser,getAllFavoritesFromUserByEmail } = require('../db/queries/favorited_queries.js');

router.post('/', createfavorite);
router.delete('/:id', deleteFavorite);
router.get('/users/:id', getAllFavoritesFromUser);
router.get('/users/ByEmail/:id', getAllFavoritesFromUserByEmail);


module.exports = router;
