
var admin = require("firebase-admin");
console.log("Success");
var fs = require('fs');
const test = require("./testwrite.js");

var serviceAccount = require("./firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sroqs-a9da6.firebaseio.com"
});

var obj = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
// console.log(obj.token[1]);

// var regToken = ["fvgzaHvEQmSqrR0BSiBoMt:APA91bFlNnpW5YXIwvtntmLpnZoY6DVlw4LON-m51UysOI7BkNpsVenGGA5lFaBJ9qiLXQoSH_GYkYGLl-pJvXyBF8P8PEDTmI77Q9Hb5iqA0SlCGaxLtnyKyJ2zCYF1I-MRnZDbm43W", "duHXxv0uTzuudWKShmtMl2:APA91bGkHW_37W8edjSE1nn-d3SXEUptKExzt4_YenJqY6XF2Fsh_UPesBozk1KPcdNf9v4jW7iGeXAQnAeXeVYf7uUyb9XA5RAvDlejCHXcO8f8hnAhud9GDP1g8tvm7okUoUg50LhI"];
// console.log(regToken);

var message = {
    notification: {
      title: 'S.R.O.Q.S',
      body: 'You\'re next in queue! Please proceed to the office.'
    }
  };

var interval = setInterval(function() {
  admin.messaging().sendToDevice(obj.token, message)
    .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
    })
    .catch((error) => {
    console.log('Error sending message:', error);
    });
}, 10000);