- the route on my local machine. /usr/local/bin/heroku

heroku login
heroku apps - to see your apps
heroku -h    -manual
heroku create (appName) (lol furever-home was already taken)

git remote -v  [display remotes]
after the heroku app is created 2 remotes are created.

one for the heroku Fetch Push

one for Github Fetch Push  

NOTES:
-Verifying deploy... done.
In the app's Package JSON inside the Scripts object

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "concurrently --kill-others \"cd frontend && npm start\" \"cd backend && npm start\"",
  "heroku-postbuild":"cd backend && npm install && cd ../frontend && npm install"
},
 \
