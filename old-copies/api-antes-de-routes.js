var express = require('express');
var request = require('request');
var firebase = require('firebase/compat/app');
require('firebase/compat/firestore');

var app = express();
const port = 3002;

app.get('/private', (req, res) => {
  res.send('Hello World!')
})

app.get('/private/books', (req, res) => {
  res.send('Hello my books....!')
})

const firebaseConfig = {
    apiKey: "AIzaSyDn....",
    authDomain: "cua....com",
    projectId: "cu...9",
    storageBucket: "cuad....t.com",
    messagingSenderId: "7.....325",
    appId: "1:724........2615c",
    measurementId: "G-.....R0B"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

app.get('/private/torneos', (req, res) => {
    
    var docRef = db.collection("tournaments").doc("7CWpHaFRY01rbM0c0RE7");

    docRef.get().then((doc) => {
        if (doc.exists) {
            const torneo = doc.data();
            res.send(`tu    torneo  es    : ${JSON.stringify(torneo)}....!`)
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

});

app.get('/private/color', (req, res) => {
    res.send('Response send to client::'+req.query.id);
});
app.get('/private/pois', (req, res) => {
    res.redirect('breikobreiko://breikobreiko.com/pois?id='+req.query.id);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
