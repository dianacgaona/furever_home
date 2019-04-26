const passport = require('passport');
const { db } = require('../db/index.js');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    db.one('SELECT * FROM users WHERE email = ${email}', {
      email: user.email
    })
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });
};
