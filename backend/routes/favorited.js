var express = require('express');
var router = express.Router();

const { createfavorite, deleteFavorite } = require('../db/queries/favorited_queries.js');

router.post('/', createfavorite);
router.delete('/:id', deleteFavorite);

module.exports = router;
