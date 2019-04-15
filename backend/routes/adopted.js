var express = require('express');
var router = express.Router();

const { getAllAdoptedFromUser, deleteAdoptedFromUser } = require('../db/queries/adopted_queries.js');

router.get('/users/:id', getAllAdoptedFromUser);
router.delete('/pet/:id', deleteAdoptedFromUser);

module.exports = router;
