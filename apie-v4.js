// npm init
// npm i express
// npm i dotenv ...para conocer el puerto en que correr la app
// npm i socket.io  ....https://www.npmjs.com/package/socket.io
// npm i --package-lock-only...only if you need it
// firebase...  https://firebase.google.com/docs/firestore/quickstart?hl=es-419
// npm install firebase@10.7.2 --save

import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

dotenv.config();
const app = express();
const server = http.createServer(app);

// module.exports.io = require('socket.io')(server);
const io = new Server(server);
// require('./sockets/socket.js');

io.on('connection', mipc => {
  console.log('estasssss conectado...');
  
  mipc.on('disconnect', () => {
      console.log('estasssss desconectado...');
  });
  
  mipc.on('mensaje', (msg) => {
      console.log('Nuevo mensaje...', msg); // se imprime en la terminal de vscode
  });
  
  mipc.emit('mensaje2', { message: 'Mensaje de retorno'});
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.resolve( __dirname, 'public' );   //  public.....private

app.use(express.static( publicPath ) );



// FIREBASE ....................................
// desde '.env'
// const firebaseConfig = {
//     apiKey: process.env.apiKey,
//     authDomain: process.env.authDomain,
//     projectId: process.env.projectId,
//     storageBucket: process.env.storageBucket,
//     messagingSenderId: process.env.messagingSenderId,
//     appId: process.env.appId,
//     measurementId: process.env.measurementId
// };

const firebaseConfig = {
    apiKey: "AIzaSyDnt6FDGvVdvZXxtPfauXlAkxFqK1lRN8Q",
    authDomain: "cuadros-fafd9.firebaseapp.com",
    projectId: "cuadros-fafd9",
    storageBucket: "cuadros-fafd9.appspot.com",
    messagingSenderId: "724339322325",
    appId: "1:724339322325:web:013df097f1df2fe982615c",
    measurementId: "G-STJF4VTR0B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

app.get('/torneos', (req, res) => {

    console.log('apiKey: ', process.env.apiKey);
    console.log('authDomain: ', process.env.authDomain);
    console.log('projectId: ', process.env.projectId);
    console.log('storageBucket: ', process.env.storageBucket);
    console.log('messagingSenderId: ', process.env.messagingSenderId);
    console.log('appId: ', process.env.appId);
    console.log('measurementId: ', process.env.measurementId);

    var docRef = db.collection("tournaments").doc("7CWpHaFRY01rbM0c0RE7");

    docRef.get().then((doc) => {
        if (doc.exists) {
            const torneo = doc.data();
            // console.log("Document data:", torneo);
            res.send(`tu    torneo  es    : ${JSON.stringify(torneo)}....!`)
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    // const torneos = 'muchos';
    // res.send(`tus torneos son : ${torneos}....!`)
});




server.listen( process.env.PORT , ( err ) => {
    if(err) throw new Error(err);
    console.log('servidor corriendo en el puerto: ', process.env.PORT);
});
