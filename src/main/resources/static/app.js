//document.addEventListener('load', status());
//import axios from 'axios'; 

function status(val) {
  console.log("this is val", val);
  console.log("hello world!! I'm back");
  el = document.querySelector(".testing");
  //el = document.querySelectorAll(".testing");
  element = document.querySelector("#checkbox");
  console.log("this is value of checkbox", element.checked);
  if (val) {
    el.classList.remove("test");
  } else {
    el.classList.add("test");
  }
}

const apiKey="3434b013d734eafb4b88dda3881c2757";
//const apiToken="8c9791bbde167544ccb6d4c04b198e6dd3bfb836113b57ea907755b32175f952"
const apiToken="aae6b22d9dae39498f12289d2f4f25355db20f339f59dbaad341a4b304c49f03"
function trello() {
    console.log("hello peoples");
    //fetch('https://api.trello.com/1/members/me/boards?key={apiKey}&token={apiToken}')
    fetch(`https://api.trello.com/1/members/me/boards?key={${apiKey}}&token={${apiToken}}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
   // axios.get('https://api.trello.com/1/members/me/boards?fields=name,url&key={apiKey}&token={apiToken}');
  console.log("hello peoples");
}


