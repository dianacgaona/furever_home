const { db } = require('../index.js');

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts').then(posts => {
    res.status(200).json({
      status: 'Success',
      posts: posts,
      message: 'YOU GOT POSTS',
    });
  });
};

const getAllPostsbyUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any(
    'SELECT * FROM posts WHERE posts.user_id=$1',
    [userId]
  )
    .then(post => {
      res.status(200).json({
        status: 'Success',
        post: post,
        message: 'All Posts by User',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllDogPosts = (req, res, next) => {
  db.any('SELECT * FROM posts WHERE pet_type=$1', ['Dog'])
    .then(post => {
      res.status(200).json({
        status: 'Success',
        post: post,
        message: 'GOT ALL DOG POSTS',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllCatPosts = (req, res, next) => {
  db.any('SELECT * FROM posts WHERE pet_type=$1', ['Cat'])
    .then(post => {
      res.status(200).json({
        status: 'Success',
        post: post,
        message: 'GOT ALL CAT POSTS',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one(
    'SELECT username,posts.id,user_id,title,post_body,pet_type,post_url FROM posts JOIN users ON users.id = posts.user_id WHERE posts.id=$1',
    [postId]
  )
    .then(post => {
      res.status(200).json({
        status: 'Success',
        post: post,
        message: 'THATS ONE POST',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createPost = (req, res, next) => {
  db.none(
    'INSERT INTO posts (user_id, title, pet_type, post_body,post_url) VALUES (${user_id}, ${title}, ${pet_type}, ${post_body},${post_url})',
    req.body
  )
    .then(() => {
      res.status(200).json({
        message: 'OH THATS A POST',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const deletePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.result('DELETE FROM posts WHERE id=$1', [postId])
    .then(result => {
      res.status(200).json({
        status: 'Success',
        message: 'POST ALL GONE',
        result: result,
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllPosts,
  getAllPostsbyUser,
  getAllDogPosts,
  getAllCatPosts,
  getSinglePost,
  createPost,
  deletePost,
};
