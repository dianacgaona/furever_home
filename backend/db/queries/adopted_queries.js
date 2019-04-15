const { db } = require('../index.js');

const getAllAdoptedFromUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT * FROM adopted WHERE user_id=$1', [userId])
    .then(adopted => {
      res.status(200)
      .json({
        status: ' success',
        adopted: adopted,
        message: 'Received all Adopted from User!',
      });
    })
    .catch(err => next(err));
};

const deleteAdoptedFromUser = (req, res, next) => {
  db.none('DELETE FROM adopted WHERE pet_id=$1',
   [Number(req.params.id)])
   .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Deleted Adopted Pet',
    });
  })
   .catch(err => next(err));
};

module.exports = { getAllAdoptedFromUser, deleteAdoptedFromUser };
