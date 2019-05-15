const { db } = require('../index.js');

const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
    .then(comments => {
      res.status(200).json({
        status: 'Success',
        comments: comments,
        message: 'YOU GOT COMMENTS',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getAllCommentsForOnePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.any(
    'SELECT username,user_id, post_id, comment_body,time_added FROM comments JOIN users ON users.id = comments.user_id WHERE post_id=$1 ORDER BY  time_added DESC',
    [postId]
  )
    .then(comment => {
      res.status(200).json({
        status: 'Success',
        comment: comment,
        message: 'COMMENTS FOR ONE',
      });
    })
    .catch(err => {
      return next(err);
    });
};
// line 20 SELECT username,user_id, post_id, comment_body FROM comments JOIN users ON users.id = comments.user_id WHERE post_id=$1
const createComment = (req, res, next) => {
  db.none(
    'INSERT INTO comments (user_id, post_id, comment_body) VALUES (${user_id}, ${post_id}, ${comment_body})',
    req.body
  )
    .then(() => {
      res.status(200).json({
        message: 'YOU COMMENTED',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const editComment = (req, res, next) => {
  db.none(
    'UPDATE comments SET  user_id=${user_id}, post_id=${post_id}, comment_body=${comment_body}, WHERE id=${id}',
    {
      user_id: req.body.user_id,
      post_id: req.body.post_id,
      comment_body: req.body.comment_body,
      id: parseInt(req.params.id),
    }
  ).then(() => {
    res.status(200).json({
      status: 'Success',
      message: 'EDIT THAT COMMENT!',
    });
  });
};

const deleteComment = (req, res, next) => {
  let comId = parseInt(req.params.id);
  db.result('DELETE FROM comments WHERE id=$1', [comId])
    .then(result => {
      res.status(200).json({
        status: 'Success',
        message: 'REGRET WHAT YOU SAID?',
        result: result,
      });
    })
    .catch(err => {
      return next(err);
    });
};

module.exports = {
  getAllComments,
  getAllCommentsForOnePost,
  createComment,
  editComment,
  deleteComment,
};
