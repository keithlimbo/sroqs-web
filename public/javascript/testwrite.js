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
  var string = {};
  
  var interval = setInterval(function(){
    string.token = [];

    //If last 1 in queue check it every 3.5 secs
    if(list.length == 1){
        db.child(list[0].toString()).on('value', function (snapshot){
            const check = snapshot.child("windowNumber").val();
            if(check == 0){
                console.log(list);
            }
        });
    }

    for(var i = 0; i < 7; i++){
        if(list[i] != null){
            // string.token.push("");
            db.child(list[i].toString()).on('value', function (snapshot){
                const check = snapshot.child("tokenID").val();
                string.token.push(check);
            });
        }
    };

    fs.writeFileSync("data.json", JSON.stringify(string), function(err) {
        if (err) throw err;
        console.log('complete');
        }
      );
  }, 3500);

   //Add all queue in array
   db.orderByChild("onQueue").equalTo(true).on("value", function(snapshot) {
    var templist = new Array();
    list = templist ;
    snapshot.forEach((function(child) {
        //Show Queue
        templist.push(child.key);
        console.log(list);
    }))
  });