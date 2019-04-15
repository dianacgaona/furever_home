const { db } = require("../index.js");

const authHelpers = require("../../auth/helpers");

const getAllUsers = (req, res, next) => {
  db.any(
    "SELECT users.id, email, password_digest AS password, username, name, about, profile_picture, city, state, zip_code FROM users JOIN location ON users.id = location.user_id GROUP BY users.id, email, password, username, name, about, profile_picture, city, state, zip_code"
  )
    .then(users => {
      res.status(200).json({
        status: "success",
        message: "All users received",
        users: users
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one(
    "SELECT users.id, email, password_digest AS password, username, name, about, profile_picture, city, state, zip_code FROM users JOIN location ON users.id = location.user_id WHERE users.id=$1 GROUP BY users.id, email, password, username, name, about, profile_picture, city, state, zip_code",
    [userId]
  )
    .then(user => {
      res.status(200).json({
        status: "success",
        message: "User received",
        user: user
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createUser = (req, res, next) => {
  // const hash = authHelpers.createHash(req.body.password_digest);
  // db.none(
  //   "INSERT INTO users( email, password_digest, username) VALUES (${email}, ${password_digest}, ${username})",
  //   {
  //     email: req.body.email,
  //     password_digest: hash,
  //     username: req.body.username
  //   }
  // )
  //   .then(() => {
  //     res.status(200).json({
  //       message: "Registration successful"
  //     });
  //   })
  //   .catch(err => {
  //     console.log("Query_error: ", err);
  //     res.status(500).json({
  //       message: error
  //     });
  //   });
  res.json({ name: "Test 1" });
};

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result("DELETE FROM users WHERE id=$1", [userId])
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "User deleted",
        result: result
      });
    })
    .catch(err => {
      return next(err);
    });
};

const isLoggedIn = (req, res) => {
  if (req.user) {
    res.json({
      id: req.user.id,
      email: req.user.email,
      username: req.user.username,
      name: req.user.name,
      about: req.user.about,
      profile_picture: req.user.profile_picture
    });
  } else {
    res.json({ email: null });
  }
};

const loginUser = (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email,
    username: req.user.username,
    name: req.user.name,
    about: req.user.about,
    profile_picture: req.user.profile_picture
  });
};

const logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("logout successful");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  isLoggedIn,
  loginUser,
  logoutUser
};
