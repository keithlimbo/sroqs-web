
var admin = require("firebase-admin");
console.log("Success");
var fs = require('fs');
const test = require("./testwrite.js");

var serviceAccount = require("./firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sroqs-a9da6.firebaseio.com"
});

var message = {
    notification: {
      title: 'S.R.O.Q.S',
      body: 'You\'re next in queue! Please proceed to the office.'
    }
  };

var interval = setInterval(function() {
  var obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  if(obj.token != ""){
    console.log(obj.token);
    admin.messaging().sendToDevice(obj.token, message)
      .then((response) => {
      // Response is a message ID string.
      console.log('Successfully sent message:', response);
      })
      .catch((error) => {
      console.log('Error sending message:', error);
      });
  }
  else{
    console.log('data.json is empty');
  }
}, 5000);