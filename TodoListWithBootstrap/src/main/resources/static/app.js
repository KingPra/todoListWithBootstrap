//document.addEventListener('load', status());

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

const apiKey = "";
const apiToken = ""

function trello() {
    if (!apiKey || !apiToken) {
      console.warn("Trello integration is disabled pending secure configuration.");
      return;
    }
  console.log("hello peoples");
  //fetch('https://api.trello.com/1/members/me/boards?fields=name,url&key={apiKey}&token={apiToken}')
  fetch(`https://api.trello.com/1/members/me/boards?fields=name,url&key={${apiKey}}&token={${apiToken}}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
    });
  // axios.get('https://api.trello.com/1/members/me/boards?fields=name,url&key={apiKey}&token={apiToken}');
  console.log("hello peoples");
}