const { db } = require('../index.js');

const createForm = (req, res, next) => {
  db.none('INSERT INTO forms (name, birthday, address, apt, city, home_allergic, home_fixed, references_name, references_relationship, references_phone, relationship_length) VALUES (${name}, ${birthday}, ${address}, ${apt}, ${city}, ${home_allergic}, ${home_fixed}, ${references_name}, ${references_relationship}, ${references_phone}, ${relationship_length})', req.body).then(() => {
      res.status(200).json({
        message: 'CREATED FORM',
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = { createForm };
