var app = Elm.Main.fullscreen(localStorage.session || null);
import {signOut} from './Firebase/fb';

app.ports.storeSession.subscribe(function(session) {
  localStorage.session = session;
  if(session === null){
    signOut();
  }
});

window.addEventListener("storage", function(event) {
  if (event.storageArea === localStorage && event.key === "session") {
    app.ports.onSessionChange.send(event.newValue);
  }
}, false);