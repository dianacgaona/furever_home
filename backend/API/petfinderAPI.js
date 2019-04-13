const axios = require("axios");

let apiToken = "";

getToken = () => {
  axios({
    url: "https://api.petfinder.com/v2/oauth2/token",
    method: "post",
    headers: {},
    data: {
      grant_type: "client_credentials",
      client_id: "aPyHda3zCinlGy1lJ0fWFDAQQvpgUomPSbOR7igJVYp8e7WVmE",
      client_secret: "GxTgtoQT1OMTJjuBMEoJIE6dNEK9DiEZ9vkRGCZe"
    }
  })
    .then(data => {
      apiToken = data.data.access_token;
    })
    .catch(err => {
      console.log("Error in getToken()", err);
    });
};

apiAllAnimals = async (req, res, next) => {
  let animals;
  try {
    console.log(apiToken);

    let data = await axios({
      url: "https://api.petfinder.com/v2/animals",
      method: "get",
      headers: {
        Authorization: "Bearer " + apiToken
      }
    });
    animals = data.data;
    res.status(200).json({
      status: "Success",
      data: animals,
      message: "ANIMALS"
    });
  } catch (err) {
    if (err) {
      console.log("error ===", err);
      apiToken = await getToken();
    }
  }
};

getToken();
module.exports = { apiAllAnimals };