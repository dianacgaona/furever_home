var express = require('express');
var router = express.Router();

const {
  apiAllAnimals,
  apiAllOrganizations,
  apiSingleOrganization,
  apiAllAnimalsQuery,
  apiAllOrganizationsQuery,
} = require('../API/petfinderAPI.js');

router.get('/animals', apiAllAnimals);
router.get('/organizations', apiAllOrganizations);
router.get('/organizations/:id', apiSingleOrganization);
router.post('/animalquery', apiAllAnimalsQuery);
router.post('/organizationquery', apiAllOrganizationsQuery);

module.exports = router;
