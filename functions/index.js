const functions = require('firebase-functions');

const admin = require('firebase-admin');

var serviceAccount = require("./config/omarks4-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://omarks4.firebaseio.com"
});
  

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.message = require('./https/messages.function');    

