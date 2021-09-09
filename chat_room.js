
 var firebaseConfig = {
      apiKey: "AIzaSyBdPgMpPGugoIMl5KONMBUf5oagBKz-rNc",
      authDomain: "chatting-corner.firebaseapp.com",
      projectId: "chatting-corner",
      storageBucket: "chatting-corner.appspot.com",
      messagingSenderId: "458137907904",
      appId: "1:458137907904:web:70d6b1d3995a60a5387325"
    };
    
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.apiKey;
      Room_names = childKey;
       console.log("Room Names", Room_names);
       row = "<div class = 'room_name' id = "+Room_names+"onclick = 'redirectToRoomName(this.id)' ># "+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
      });
      }
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
