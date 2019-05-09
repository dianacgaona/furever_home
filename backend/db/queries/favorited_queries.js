const { db } = require('../index.js');

const createfavorite = (req, res, next) => {
  console.log(req.user);
  db.none('INSERT INTO favorited (user_id, pet_id) VALUES (${user_id}, ${pet_id})', {
    user_id: parseInt(req.user.id),
    pet_id: parseInt(req.body.pet_id),
  })
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'ADDED FAVORITE',
    });
  })
   .catch(err => next(err));
};

const deleteFavorite = (req, res, next) => {
  db.none('DELETE FROM favorited WHERE pet_id=$1',
   [Number(req.params.id)])
   .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Deleted FAVORITE',
    });
  })
   .catch(err => next(err));
};

const getAllFavoritesFromUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT * FROM favorited WHERE user_id=$1', [userId])
    .then(favorited => {
      res.status(200)
      .json({
        status: ' success',
        favorited: favorited,
        message: 'Received All Favorites From One User!',
      });
    })
    .catch(err => next(err));
};

const getAllFavoritesFromUserByEmail = (req, res, next) => {
  let userEmail = req.params.id
  db.any("SELECT ARRAY_AGG(pet_id) AS ARRAY FROM favorited JOIN users ON users.id = favorited.user_id WHERE users.email=$1",userEmail)
    .then(favorited => {
      res.status(200)
      .json({
        status: ' success',
        favorited: favorited[0]['array'],
        message: 'Received All Favorites From One User by Email!',
      })
    })
    .catch(err => next(err));
};

module.exports = { createfavorite, deleteFavorite, getAllFavoritesFromUser,getAllFavoritesFromUserByEmail };
