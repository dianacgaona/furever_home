var express = require("express");
var router = express.Router();

const {
  apiAllAnimals,
  apiAllOrganizations,
  apiAllAnimalsQuery
} = require("../API/petfinderAPI.js");

router.get("/animals", apiAllAnimals);
router.get("/organizations", apiAllOrganizations);
router.get("/animals?type=:type", apiAllAnimalsQuery);

module.exports = router;
