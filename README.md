# node-chat

## This is the companion SERVER running Node.js and Express.js to configure as the BACKEND for the 'angular-chat' client.
Server will be running on port: 8000

Server needs to BE RUNNING - prior to running the CLIENT in order to get the CLIENT to function properly.

For testing open two browsers and connect both browses to same same domain and port that the 'angular-chat' app is running on.

## Necessary dependencies
Need to install - Express, Cors, and Nodemon: run 'npm install express cors nodemon' - then run 'npm start' to run the server requiring the 'src/index.js' file.
In order for this to work you need to make sure that in the cors domain listing you include the local domain that you are running your Angular client on. 
The default is port: 4200 and the existing cors setup has port: 4200 configured. If needed just add the new domain and port to the existing list by appending to the end.
