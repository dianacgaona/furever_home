# API Endpoints

### Html
* GET `/`
	* loads Furever Home homepage

### Users

*GET `/api/users`
  * Fetches all the users
* GET `/api/users/:userId`
	* Fetches single existing user profile
* PATCH `/api/users/:userId`
	* User can update profile

### Posts

* GET `/api/users/:userId/posts`
	* Fetches all posts of a specific user
GET `/api/posts/:postId`
	Fetches selected post for the user
POST `/api/posts`
	Creates a new board for a user
DELETE `/api/posts/:postId`
	Deletes selected post of a user
