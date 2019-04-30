const { db } = require('../index.js');

const getAllForm = (req, res, next) => {
  db.any('SELECT * FROM form')
    .then(form => {
      res.status(200).json({
        status: 'Success',
        form: form,
        message: 'YOU GOT THE WHOLE FORM',
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllForm,
};
