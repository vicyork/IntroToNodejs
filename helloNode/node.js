"use strict";
var http;
http = require('http');

// Lets define a port we want to listen to
const PORT = 8080;

//We need a function which handles requests and send response
function handleRequest(request, response) {
  "use strict";
  response.end('HOW y\'aLL doin\' from NODE!! We\'re at this requested url:' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, ()=> {
  "use strict";
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});
