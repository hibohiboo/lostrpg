var app = Elm.Main.fullscreen(localStorage.session || null);
// app.ports.storeSession.subscribe(function(session) {
//   localStorage.session = session;
// });

window.addEventListener("storage", function(event) {
  console.log('test')
  if (event.storageArea === localStorage && event.key === "session") {
    console.log('addEventSession')
    app.ports.onSessionChange.send(event.newValue);
  }
}, false);

import {redirectTwitter} from './Firebase/fb';

//ElmからJSへはsubscribe
app.ports.redirectTwitter.subscribe(function() {
  redirectTwitter();
});

//ElmからJSへはsubscribe
app.ports.redirectTop.subscribe(function() {
  console.log('call')
  location.href = '/';
});
