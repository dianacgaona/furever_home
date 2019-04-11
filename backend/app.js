<<<<<<< HEAD
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shelterRouter = require('./routes/shelters');
var postsRouter = require('./routes/posts');
var petsRouter = require('./routes/pets');
var favoritedRouter = require('./routes/favorited');
var commentsRouter = require('./routes/comments');
=======
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var shelterRouter = require("./routes/shelters");
var postsRouter = require("./routes/posts");
var petsRouter = require("./routes/pets");
var likesRouter = require("./routes/likes");
var commentsRouter = require("./routes/comments");
>>>>>>> 0772607c43f9cffc0d7cd76b5b25686bf5e7c13b

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

<<<<<<< HEAD
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shelters', sheltersRouter);
app.use('/posts', postsRouter);
app.use('/pets', petsRouter);
app.use('/favorited', favoritedRouter);
app.use('/comments', commentsRouter);
=======
// app.use("/", indexRouter);
// app.use('/users', usersRouter);
// app.use('/shelters', sheltersRouter);
// app.use('/posts', postsRouter);
// app.use('/pets', petsRouter);
// app.use('/likes', likesRouter);
app.use("/comments", commentsRouter);
>>>>>>> 0772607c43f9cffc0d7cd76b5b25686bf5e7c13b

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
