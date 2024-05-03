const express = require('express');
const router = express.Router();

var firebaseSurf = require('firebase/compat/app');
require('firebase/compat/firestore');

const firebaseConfigSurf = {
    apiKey: "AIzaSyAQafIPMzR0V5m9flc_I6c2j9RiHzJqyXo",
    authDomain: "massurf-43936.firebaseapp.com",
    projectId: "massurf-43936",
    storageBucket: "massurf-43936.appspot.com",
    messagingSenderId: "1096448938936",
    appId: "1:1096448938936:web:8eab7eae3944b334c3754d",
    measurementId: "G-8HKCWGVKRC"
};

const secondary = firebaseSurf.initializeApp(firebaseConfigSurf, 'secondary');

const dbSurf = firebaseSurf.firestore(secondary);

router.route('/mercado').get((req, res) => {
    
    //var docRef = db.collection("tournaments").doc( req.query.id );  
    //....https://ganamasa.com/private/cuadros/torneos?id=22371
    
    var docRef = dbSurf.collection("mercado").doc("DQLz1uNKbJlt0LB7Ddhp");
    
    docRef.get().then((doc) => {
        if (doc.exists) {
            const articulo = doc.data();
            res.send(`tu articulo es : ${JSON.stringify(articulo)}....!`)
        } else {
            res.send(`petassooo...........!`)
        }
    }).catch((error) => {
        res.send(`errorooo....... ${JSON.stringify(error)}`)
    });

});

module.exports = router;
