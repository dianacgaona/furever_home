var express = require('express');
var router = express.Router();

const {
  getAllForm,
} = require('../db/queries/form_queries.js');

router.post('/', getAllForm);

module.exports = router;
