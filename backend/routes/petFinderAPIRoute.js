var express = require("express");
var router = express.Router();

const { apiAllAnimals } = require("../API/petfinderAPI.js");

router.get("/", apiAllAnimals);

module.exports = router;
