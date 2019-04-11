const { db } = require('../index.js');

const createfavorite = (req, res, next) => {
  db.none('INSERT INTO favorited (user_id, pet_id) VALUES (${user_id}, ${pet_id})', {
    user_id: parseInt(req.body.liker_id),
    pet_id: req.body.post_id,
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
  db.none('DELETE FROM favorited WHERE id=$1',
   [Number(req.params.id)])
   .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Deleted FAVORITE',
    });
  })
   .catch(err => next(err));
};

const getAllFavoritesFromPost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.any('SELECT * FROM likes WHERE favorite_id=$1', [postId])
    .then(likes => {
      res.status(200)
      .json({
        status: ' success',
        likes: likes,
        message: 'Received All Favorites From One Post!',
      });
    })
    .catch(err => next(err));
};

module.exports = { createfavorite, deleteFavorite, getAllFavoritesFromPost };
