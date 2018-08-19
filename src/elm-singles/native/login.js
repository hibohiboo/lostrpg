var app = Elm.Main.fullscreen(localStorage.session || null);
// app.ports.storeSession.subscribe(function(session) {
//   localStorage.session = session;
// });

window.addEventListener("storage", function(event) {
  if (event.storageArea === localStorage && event.key === "session") {
    app.ports.onSessionChange.send(event.newValue);
  }
}, false);

import {redirectTwitter} from './Firebase/fb';

//ElmからJSへはsubscribe
app.ports.redirectTwitter.subscribe(function() {
  redirectTwitter();
});

app.ports.redirectTop.subscribe(function() {
  location.href = '/';
});
