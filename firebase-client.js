const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDdmWmcuH3wvFec5hUI7mYHNQ3CEQrsIms",
    authDomain: "wonderscore-dabc4.firebaseapp.com",
    databaseURL: "https://wonderscore-dabc4.firebaseio.com",
    projectId: "wonderscore-dabc4",
    storageBucket: "wonderscore-dabc4.appspot.com",
    messagingSenderId: "873451662945",
    appId: "1:873451662945:web:0010aec5f5fee493b50420"
});

var db = firebase.firestore();


module.exports = {db};

