var express = require("express");
var router = express.Router();

const {
  getAllComments,
  getAllCommentsForOnePost,
  createComment,
  editComment,
  deleteComment,
} = require("../db/queries/comments_queries.js");

router.get("/", getAllComments);
router.post("/", createComment);
router.get("/post/:id", getAllCommentsForOnePost);
router.patch("/:id", editComment);
router.delete("/:id", deleteComment);

module.exports = router;
