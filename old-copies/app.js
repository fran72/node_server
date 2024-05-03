// npm init
// npm i express
// npm i dotenv ...para conocer el puerto en que correr la app
// npm i socket.io  ....https://www.npmjs.com/package/socket.io
// npm i --package-lock-only...only if you need it
// firebase...  https://firebase.google.com/docs/firestore/quickstart?hl=es-419

const express = require('express');
const path = require('path');
require('dotenv').config();

// App de Express
const app = express();

// Node server
const server = require('http').createServer(app); // asi metes en SERVER toda la configuracion de APP (son full compatibles)

// const io = require('socket.io')(server);   // lo exportamos para acceder a el desde socket.js
module.exports.io = require('socket.io')(server);
require('./sockets/socket.js');



//path publico
const publicPath = path.resolve( __dirname, 'public' );   //  public.....private

app.use(express.static( publicPath ) );
//....otra forma:  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

server.listen( process.env.PORT , ( err ) => {
// app.listen( process.env.PORT , ( err ) => {
    
    if(err) throw new Error(err);
    
    console.log('servidor corriendo en el puerto: ', process.env.PORT);
    console.log( publicPath );
    
});
