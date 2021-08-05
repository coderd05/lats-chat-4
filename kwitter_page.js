//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDHmL5ZUmjkxSwcZL5lHRs5O7HdMO6Y3NA",
      authDomain: "kwitter-da69a.firebaseapp.com",
      databaseURL: "https://kwitter-da69a-default-rtdb.firebaseio.com",
      projectId: "kwitter-da69a",
      storageBucket: "kwitter-da69a.appspot.com",
      messagingSenderId: "821991743864",
      appId: "1:821991743864:web:a0e4f3d71a15431dcba88d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
