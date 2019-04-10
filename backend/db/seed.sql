DROP DATABASE IF EXISTS furever_home;
CREATE DATABASE furever_home;

\c furever_home;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  username VARCHAR,
  name VARCHAR,
  about TEXT,
  profile_picture VARCHAR
);

CREATE TABLE location(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  city VARCHAR NOT NULL,
  state VARCHAR NOT NULL,
  zip_code INT NOT NULL
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR NOT NULL,
  pet_type VARCHAR NOT NULL,
  post_body TEXT NOT NULL
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  comment_body TEXT NOT NULL
);

CREATE TABLE favorited(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  pet_id TEXT
);

CREATE TABLE adopted(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  pet_id TEXT
);

INSERT INTO users(email, password_digest, username, name, about, profile_picture) VALUES ('user1@fh.com', '123', 'user1', 'user one', 'I am user number one', 'https://images.pexels.com/photos/1389994/pexels-photo-1389994.jpeg'), ('user2@fh.com', '123', 'user2', 'user two', 'I am user number two', 'https://images.pexels.com/photos/206396/pexels-photo-206396.jpeg'), ('user3@fh.com', '123', 'user3', 'user three', 'I am user number three', 'https://images.pexels.com/photos/1757011/pexels-photo-1757011.jpeg'), ('user4@fh.com', '123', 'user4', 'user four', 'I am user number four', 'https://images.pexels.com/photos/36027/girl-cat-love-young.jpg');

INSERT INTO location(user_id, city, state, zip_code) VALUES (1, 'Brooklyn', 'NY', 11237), (2, 'Queens', 'NY', 11416), (3, 'New York City', 'NY', 10001), (4, 'Bronx', 'NY', 10467);
