const express = require('express');
const router = express.Router();

var firebase = require('firebase/compat/app');
require('firebase/compat/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDnt6FDGvVdvZXxtPfauXlAkxFqK1lRN8Q",
    authDomain: "cuadros-fafd9.firebaseapp.com",
    projectId: "cuadros-fafd9",
    storageBucket: "cuadros-fafd9.appspot.com",
    messagingSenderId: "724339322325",
    appId: "1:724339322325:web:013df097f1df2fe982615c",
    measurementId: "G-STJF4VTR0B"
};

const primary = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(primary);

router.route('/torneos').get((req, res) => {
    
    //var docRef = db.collection("tournaments").doc( req.query.id );  
    //....https://ganamasa.com/private/cuadros/torneos?id=22371
    
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

module.exports = router;
