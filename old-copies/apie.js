var express = require('express');
// var https = require('https');
var request = require('request');
var app = express();
const port = 3000;

app.get('/private', (req, res) => {
  res.send('Hello World!')
})

app.get('/private/books', (req, res) => {
  res.send('Hello my books....!')
})

app.get('/private/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.send(`Hello your book is ${id}....!`)
})

app.get('/private/lotty', (req, res) => {

  let usr = 9;

  request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body);
  });
  
  // res.send(`Hello your user id is: ${this.usr}....!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// HTTACCESS....en la carpeta public DE SERED........................................
// # DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION BEGIN
// PassengerAppRoot "/home/latander/api"
// PassengerBaseURI "/private"
// PassengerNodejs "/home/latander/nodevenv/api/10/bin/node"
// PassengerAppType node
// PassengerStartupFile app.js
// # DO NOT REMOVE. CLOUDLINUX PASSENGER CONFIGURATION END



// ORIGINAL DE SERED EN NODE 10........................................
// var http = require('http');
// var express = require('express');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'It works fineeeee!\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();
