const express = require("express");
const app = express();
const http = require("http").Server(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The path to the 'www' directory
app.use(express.static(__dirname + "/www"));

// Import and use the home route
require("./routes/homeroute.js").route(app);

let server = http.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("My First Nodejs Server");
  console.log("Server listening on: " + host + " port: " + port);
});
