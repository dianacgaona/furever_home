const { db } = require("../index.js");

const getAllPosts = (req, res, next) => {
  db.any("SELECT * FROM posts").then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "YOU GOT POSTS"
    });
  });
};

const getSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one("SELECT * FROM posts WHERE id=$1", [postId])
    .then(data => {
      res.status(200).json({
        status: "Success",
        data: data,
        message: "THATS ONE POST"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createPost = (req, res, next) => {
  db.none(
    "INSERT INTO posts (user_id, title, pet_type, post_body) VALUES (${user_id}, ${title}, ${pet_id}, ${post_body})",
    req.body
  )
    .then(() => {
      res.status(200).json({
        message: "OH THATS A POST"
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deletePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.result("DELETE FROM posts WHERE id=$1", [postId])
    .then(result => {
      res.status(200).json({
        status: "Success",
        message: "POST ALL GONE",
        result: result
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  deletePost
};
