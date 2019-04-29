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

Unfortunately, if it is a non-master branch, Heroku won't build it. Example:

$ git push heroku-dev test
counting objects ...
...
Pushed to non-master branch, skipping build.
To git@heroku.com:example-dev.git
* [new branch]      test -> test
So instead, use the following command to push the non-master branch to Heroku's master branch, so that it will build it:

$ git push heroku [name-of-your-branch]:master
Once you are ready to push master, then:




 git push heroku [name-of-your-branch]:master


package.json front-end   

SEED.SQL
-- comment out lines 1-3 for heroku seeding the database.
-- Since heroku has a database already created. Instead of the local one it connects to heroku.

line 32 -"proxy": "http://localhost:3100"

