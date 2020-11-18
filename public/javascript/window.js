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
  var intervalID = setInterval(function(){
    if(list.length == 1){
        updateWindow(1);
        updateWindow(2);
        updateWindow(3);
        updateWindow(4);
        db.child(list[0].toString()).on('value', function (snapshot){
            const check = snapshot.child("windowNumber").val();
            if(check == 0){
              document.getElementById('queue-number').innerHTML = 0;
            }
        });
    }
  }, 2500);
  for(var i = 1; i <= 4 ; i++){
      getNumberonWindow(i);
  }

  //Add all queue in array
  db.orderByChild("onQueue").equalTo(true).on("value", function(snapshot) {
    var queueNumber = "";
    var templist = new Array();
    list = templist ;
    snapshot.forEach((function(child) {
        //Show Queue
        queueNumber += child.key + " "
        //
        templist.push(child.key)
        document.getElementById('queue-number').innerHTML = queueNumber
        console.log(list)
    }))
  });

  function getNumberonWindow(WindowNumber){
      var windowNumberList = [];
      db.orderByChild("windowNumber").equalTo(WindowNumber).on("value", function(snapshot){
          var windowNumberTemplist = new Array();
          windowNumberList = windowNumberTemplist;
          snapshot.forEach((function(child){
              windowNumberTemplist.push(child.key);
              document.getElementById("window"+WindowNumber+"-number").innerHTML = windowNumberList[0];
          }))
      })
  }
  
  function updateWindow(WindowNumber){
      const winNumber = document.getElementById("window"+WindowNumber+"-number").innerHTML;
      db.child(winNumber.toString()).on('value', function (snapshot){
          const hey = snapshot.child("windowNumber").val();
          if(hey == 0){
            document.getElementById("window"+WindowNumber+"-number").innerHTML = 0
          }
      });
  }