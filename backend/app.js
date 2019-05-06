const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const passport = require('passport');
const session = require('express-session');

let app = express();

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let postsRouter = require('./routes/posts');
let adoptedRouter = require('./routes/adopted');
let favoritedRouter = require('./routes/favorited');
let commentsRouter = require('./routes/comments');
let formsRouter = require('./routes/forms');
let petfinderRouter = require('./routes/petFinderAPIRoute');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: 'never gonna give u up',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/adopted", adoptedRouter);
app.use("/api/favorited", favoritedRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/petfinder", petfinderRouter);

app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
// should only use on deployment lines 50-52

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log('INTERNAL SERVER ERROR', err);
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
