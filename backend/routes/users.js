const express = require('express');
const router = express.Router();
const passport = require('../auth/local');
const { loginRequired } = require('../auth/helpers');
const {
  getAllUsers,
  getSingleUser,
  deleteUser,
  createUser,
  updateUserProfile,
  logoutUser,
  loginUser,
  isLoggedIn,
} = require('../db/queries/user_queries.js');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/isloggedin', isLoggedIn);
router.post('/new', createUser);
router.patch('/profile/:id',updateUserProfile)
router.post('/login', passport.authenticate('local'), loginUser);
router.post('/logout', loginRequired, logoutUser);
router.delete('/:id', deleteUser);

module.exports = router;
