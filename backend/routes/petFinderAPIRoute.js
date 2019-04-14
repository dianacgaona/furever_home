var express = require("express");
var router = express.Router();

const {
  apiAllAnimals,
  apiAllOrganizations
} = require("../API/petfinderAPI.js");

router.get("/animals", apiAllAnimals);
router.get("/organizations", apiAllOrganizations);

module.exports = router;
