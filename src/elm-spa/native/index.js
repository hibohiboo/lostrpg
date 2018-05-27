
// user = {"email":"test000@gmai.com","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mjk2MzMsInVzZXJuYW1lIjoidGVzdDAwMCIsImV4cCI6MTUzMjU2NzcwN30.-VEV8lHQGl8LHZGkWqWUaL-sHst-ZFZnnLJPWcqNot8","username":"test000","bio":null,"image":null,"createdAt":"2018-05-27T01:15:06.996Z","updatedAt":"2018-05-27T01:15:07.002Z"};
//localStorage.session =JSON.stringify(user);
//{"email":"test@gmail.com","token":"aaa","username":"hibohiboo","bio":null,"image":null,"createAt":"20180101","updateAt":"20180101"}

var app = Elm.Main.fullscreen(localStorage.session || null);

app.ports.storeSession.subscribe(function(session) {
  localStorage.session = session;
});

window.addEventListener("storage", function(event) {
  if (event.storageArea === localStorage && event.key === "session") {
    app.ports.onSessionChange.send(event.newValue);
  }
}, false);

import './Firebase/fb';
