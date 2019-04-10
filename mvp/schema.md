# Schema

## users

| column name     | data type | details                   |
| --------------- | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| username        | string    | not null, indexed, unique |
| name            | string    | not null                  |
| profile_picture | string    |                           |
| about           | string    |                           |

## location

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| city        | string    | not null              |
| state       | string    | not null              |
| zip_code    | integer   | not null              |

## posts

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| title       | string    | not null              |
| pet_type    | string    | not null              |
| post_body   | string    |

## comments

| column name  | data type | details               |
| ------------ | --------- | --------------------- |
| id           | integer   | not null, primary key |
| user_id      | integer   | not null, foreign key |
| post_id      | integer   | not null, foreign key |
| comment_body | string    | not null              |

## favorited pets

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| pet_id      | integer   | not null, foreign key |
| user_id     | integer   | not null, foreign key |

## adopted pets

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| pet_id      | integer   | not null, foreign key |
| user_id     | integer   | not null, foreign key |
