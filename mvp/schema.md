# Schema

## users

| column name     | data type | details                   |
| --------------- | --------- | ------------------------- |
| id              | integer   | not null, primary key     |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| username        | string    | not null, indexed, unique |
| name            | string    | not null                  |

## posts

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| title       | string    | not null              |
| post_body   | string    |

## comments

| column name  | data type | details               |
| ------------ | --------- | --------------------- |
| id           | integer   | not null, primary key |
| user_id      | integer   | not null, foreign key |
| post_id      | integer   | not null, foreign key |
| comment_body | string    | not null, foreign key |

## favorited pets

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| type        | string    | not null, foreign key |
| breed       | string    | not null, foreign key |
| color       | string    | not null, primary key |
| age         | integer   | not null, foreign key |
| gender      | string    | not null, foreign key |
| size        | string    | not null, foreign key |
| coat        | string    | not null, foreign key |
| name        | string    | not null, foreign key |
| description | string    | not null, primary key |
| img_url     | string    | not null, foreign key |
| attributes  | string    | not null, foreign key |
| status      | string    | not null, foreign key |

## adopted pets

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| user_id     | integer   | not null, foreign key |
| type        | string    | not null, foreign key |
| breed       | string    | not null, foreign key |
| color       | string    | not null, primary key |
| age         | integer   | not null, foreign key |
| gender      | string    | not null, foreign key |
| size        | string    | not null, foreign key |
| coat        | string    | not null, foreign key |
| name        | string    | not null, foreign key |
| description | string    | not null, primary key |
| imgs        | string    | not null, foreign key |
| attributes  | string    | not null, foreign key |
