const fs = require('fs');
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/database");

var firebaseConfig = {
    apiKey: "AIzaSyCzi_bm46rEPlZJXBxXR-VJOoZ7ijzekh4",
    authDomain: "sroqs-a9da6.firebaseapp.com",
    databaseURL: "https://sroqs-a9da6.firebaseio.com",
    projectId: "sroqs-a9da6",
    storageBucket: "sroqs-a9da6.appspot.com",
    messagingSenderId: "983208557248",
    appId: "1:983208557248:web:3a85ac7b7f9f91a83a0b25",
  };

  firebase.initializeApp(firebaseConfig);

  //Read data from queue
  var db = firebase.database().ref("queue");
  var list = [];

   //Add all queue in array
   db.orderByChild("onQueue").equalTo(true).on("value", function(snapshot) {
    var templist = new Array();
    list = templist ;
    snapshot.forEach((function(child) {
        //Show Queue
        templist.push(child.key)
        console.log(list)
    }))
  });

var string = {};
string.token = [];

string.token.push("duHXxv0uTzuudWKShmtMl2:APA91bGkHW_37W8edjSE1nn-d3SXEUptKExzt4_YenJqY6XF2Fsh_UPesBozk1KPcdNf9v4jW7iGeXAQnAeXeVYf7uUyb9XA5RAvDlejCHXcO8f8hnAhud9GDP1g8tvm7okUoUg50LhI");

fs.writeFileSync("data.json", JSON.stringify(string), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);