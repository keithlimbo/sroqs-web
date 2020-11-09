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


  //Get current number in list
  function getNumberonWindow(WindowNumber){
    var windowNumberList = [];
    db.orderByChild("windowNumber").equalTo(WindowNumber).on("value", function(snapshot){
        var windowNumberTemplist = new Array();
        windowNumberList = windowNumberTemplist;
        snapshot.forEach((function(child){
            windowNumberTemplist.push(child.key);
            document.getElementById("window"+WindowNumber).innerHTML = windowNumberList[0];
        }))
    })
  }

  for(var i = 1; i <= 4 ; i++){
    console.log(i);
    getNumberonWindow(i);
  }
  //End

  //Next
  function nextQueue(window){
    var getWinNumber = document.getElementById("window"+window).innerHTML;
    alert(getWinNumber + " is done!");
    if(getWinNumber != 0){
        db.child(getWinNumber.toString()).set({
            college: null,
            email: null,
            onQueue: null,
            WindowNumber: 0
        })    
    }
  }