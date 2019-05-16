const axios = require('axios');

let apiToken = '';
let location = 'state=NY&limit=100&location=11378&distance=10';

getToken = () => {
  axios({
    url: 'https://api.petfinder.com/v2/oauth2/token',
    method: 'post',
    headers: {},
    data: {
      grant_type: 'client_credentials',
      client_id: 'aPyHda3zCinlGy1lJ0fWFDAQQvpgUomPSbOR7igJVYp8e7WVmE',
      client_secret: 'DYhhxZ48yFUWE3XrmbFHcEuyLt8CflBokBnZWrtJ',
    },
  })
    .then(data => {
      apiToken = data.data.access_token;
    })
    .catch(err => {
      console.log('Error in getToken()', err);
    });
};

apiAllAnimals = async (req, res, next) => {
  let animals;
  try {
    let data = await axios({
      url: 'https://api.petfinder.com/v2/animals?' + location,
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    });
    animals = data.data;
    res.status(200).json({
      status: 'Success',
      data: animals,
      message: 'ANIMALS',
    });
  } catch (err) {
    if (err) {
      console.log('error ===', err);
      apiToken = await getToken();
    }
  }
};

apiSingleAnimal = async (req, res, next) => {
  let animal;
  let id = parseInt(req.params.id);
  try {
    let { data } = await axios({
      url: `https://api.petfinder.com/v2/animals/${id}`,
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    });
    animal = data.animal;
    let singleOrg = await axios({
      url: `https://api.petfinder.com/v2/organizations/${
        animal.organization_id
      }`,
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    });

    let animalAndOrg = {
      ...animal,
      org_name: singleOrg.data.organization.name,
    };

    res.status(200).json({
      status: 'Success',
      animal: animalAndOrg,
      message: 'Single animal received',
    });
  } catch (err) {
    if (err) {
      console.log('error ===', err);
      apiToken = await getToken();
    }
  }
};

//this query can be used to find animals in one shelter using the shelter ID
apiAllAnimalsQuery = async (req, res, next) => {
  let animals;
  let queryArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryArray.push(key + '=' + req.body[key]);
  });
  let queryString = queryArray.join('&');
  console.log(queryString);
  try {
    let data = await axios({
      url:
        'https://api.petfinder.com/v2/animals?limit=100&status=adoptable&' +
        queryString,
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    });
    animals = data.data;
    res.status(200).json({
      status: 'Success',
      data: animals,
      message: 'ANIMALS',
    });
  } catch (err) {
    if (err) {
      // console.log("error ===", err);
      apiToken = await getToken();
    }
  }
};

apiAllOrganizations = async (req, res, next) => {
  let organizations;
  try {
    let data = await axios({
      url: 'https://api.petfinder.com/v2/organizations?' + location,
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + apiToken,
      },
    });
    organizations = data.data.organizations;
    res.status(200).json({
      status: 'Success',
      organizations: organizations,
      message: 'ORGANIZATIONS'
    });
  } catch (err) {
    if (err) {
      console.log("error ===", err);
      apiToken = await getToken();
    }
  }
};

apiSingleOrganization = async (req, res, next) => {
  let organization;
  let id = req.params.id;
  try {
    let { data } = await axios({
      url: `https://api.petfinder.com/v2/organizations/${id}`,
      method: "get",
      headers: {
        Authorization: "Bearer " + apiToken
      }
    });
    organization = data.organization;
    res.status(200).json({
      status: "Success",
      organization: organization,
      message: "Organization received"
    });
  } catch (err) {
    if (err) {
      console.log("error ===", err);
      apiToken = await getToken();
    }
  }
};

apiAllOrganizationsQuery = async (req, res, next) => {
  let organizations;
  let queryArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryArray.push(key + "=" + req.body[key]);
  });
  let queryString = queryArray.join("&");
  console.log(queryString);
  try {
    let data = await axios({
      url: "https://api.petfinder.com/v2/organizations?" + queryString,
      method: "get",
      headers: {
        Authorization: "Bearer " + apiToken
      }
    });
    organizations = data.data;
    res.status(200).json({
      status: "Success",
      data: organizations,
      message: "ORGANIZATIONS"
    });
  } catch (err) {
    if (err) {
      // console.log("error ===", err);
      apiToken = await getToken();
    }
  }
};

getToken();
module.exports = {
  apiAllAnimals,
  apiSingleAnimal,
  apiAllOrganizations,
  apiSingleOrganization,
  apiAllAnimalsQuery,
  apiAllOrganizationsQuery
};
