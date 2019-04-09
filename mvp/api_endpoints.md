# API Endpoints

## HTML API

### Root

- `GET /`
  - loads ‘Furever Home’ homepage

### Users

- `POST /api/users`
  - Creates new user
- `GET /api/users/:userId`
  - Fetches single existing user profile
- `PATCH /api/users/:userId`
  - Edits user
- `DELETE /api/users/:id`
  - Deletes single user

### Pets

- `GET /api/pets`
  - Fetches all pets
- `GET /api/pets/:petId`
  - Fetches single pet
- `PATCH /api/pets/:petId`
  - Edits pet

### Shelters

*`GET api/shelters`
*Fetches all shelters
*`GET api/shelters/:shelterId`
*Fetches single shelter
*`GET api/shelters/radius`
*Fetches shelter within chosen radius

### Posts

- `POST /api/post`
  - Add post
- `GET /api/post/:userId/comments`
  - Get all comments from one post
- `PATCH /post/:id`
  - Edit post
- `DELETE /api/post/:id`
  - Deletes single post

### Comments

- `POST /comments`
  - Creates new comment
- `PATCH /comment/:id`
  - Edit comment
- `DELETE /comment/:id`
  - Deletes single comment

### Likes

- `POST /like`
  - Adds like
- `DELETE /posts/:id`
  - Deletes single like
- `GET /posts/:id`
  - Get all likes from one post
