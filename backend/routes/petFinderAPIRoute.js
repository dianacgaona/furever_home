var express = require("express");
var router = express.Router();

const {
  apiAllAnimals,
  apiSingleAnimal,
  apiAllOrganizations,
  apiSingleOrganization,
  apiAllAnimalsQuery,
  apiAllOrganizationsQuery,
} = require("../API/petFinderAPI.js");

router.get("/animals", apiAllAnimals);
router.get("/animals/:id", apiSingleAnimal);
router.get("/organizations", apiAllOrganizations);
router.get("/organizations/:id", apiSingleOrganization);
router.post("/animalquery", apiAllAnimalsQuery);
router.post("/organizationquery", apiAllOrganizationsQuery);

module.exports = router;
