var express = require('express');
var router = express.Router();

const { createForm } = require('../db/queries/forms_queries.js');

router.post('/', createForm);

module.exports = router;
