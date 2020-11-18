
var admin = require("firebase-admin");
console.log("Succsess")
var serviceAccount = require("./firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sroqs-a9da6.firebaseio.com"
});

var regToken = ["fvgzaHvEQmSqrR0BSiBoMt:APA91bFlNnpW5YXIwvtntmLpnZoY6DVlw4LON-m51UysOI7BkNpsVenGGA5lFaBJ9qiLXQoSH_GYkYGLl-pJvXyBF8P8PEDTmI77Q9Hb5iqA0SlCGaxLtnyKyJ2zCYF1I-MRnZDbm43W", "duHXxv0uTzuudWKShmtMl2:APA91bGkHW_37W8edjSE1nn-d3SXEUptKExzt4_YenJqY6XF2Fsh_UPesBozk1KPcdNf9v4jW7iGeXAQnAeXeVYf7uUyb9XA5RAvDlejCHXcO8f8hnAhud9GDP1g8tvm7okUoUg50LhI"];

var topic = "Test";

var message = {
    notification: {
      title: 'S.R.O.Q.S',
      body: 'You\'re next in queue! Please proceed to the office.'
    },
    topic: topic
  };

admin.messaging().subscribeToTopic(regToken, topic)
  .then(function(response) {
    console.log('Successfully subscribed to topic:', response);
  })
  .catch(function(error) {
    console.log('Error subscribing to topic:', error);
  });

admin.messaging().send(message)
    .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
    })
    .catch((error) => {
    console.log('Error sending message:', error);
    });