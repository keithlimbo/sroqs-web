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
  
  function read(){
      db.on("value", function(snap){
          console.log(snap.val());
      }, function (error){
          console.log("error: " + error)
      })
  }

  db.orderByChild("onQueue").equalTo(true).on("value", function(snapshot) {
      var queueNumber = ""
    snapshot.forEach((function(child) {
         queueNumber += child.key + " "
         document.getElementById('queue-number').innerHTML = queueNumber
        }))
  });