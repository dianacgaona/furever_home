DROP DATABASE IF EXISTS furever_home;
CREATE DATABASE furever_home;

\c furever_home;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  name VARCHAR,
  username VARCHAR,
  about TEXT,
  profile_picture VARCHAR
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR NOT NULL,
  post_body TEXT NOT NULL
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  comment_body TEXT NOT NULL
);

INSERT INTO users(email, password_digest, name, username, about, profile_picture) VALUES ('here', 'maybe', 'hello', 'nope', 'new here', 'bleh');

INSERT INTO posts(user_id, title, post_body) VALUES(1, 'new', 'my pet');

INSERT INTO comments(user_id, post_id, comment_body) VALUES(1, 1, 'NOPE');
