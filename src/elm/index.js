'use strict';

// require('ace-css/css/ace.css');
// require('font-awesome/css/font-awesome.css');

// index.htmlがdistにコピーされるようにRequireする
require('./index.html');
require('./css/style.css');

var Elm = require('./Main.elm');
var mountNode = document.getElementById('main');

// .embed()はオプションの第二引数を取り、プログラム開始に必要なデータを与えられる。たとえばuserIDや何らかのトークンなど
var app = Elm.Main.embed(mountNode);

// Firebase

// ********** C O N F I G
import firebase from 'firebase';
import config from "./Firebase/fb.config.json";

console.log("Using project:", config.projectId);
firebase.initializeApp(config);

var auth = firebase.auth();
auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var uid = user.uid;
    console.log(uid);
    //JSからElmへはsend
    app.ports.jsLogin.send(uid);
  }
});

function redirectTwitter() {
  return auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    const provider = new firebase.auth.TwitterAuthProvider();
    auth.signInWithRedirect(provider);
  });
}

//ElmからJSへはsubscribe
app.ports.redirectTwitter.subscribe(function() {
  redirectTwitter();
});[]


// // Load main firebase handler
// import fb from "./Firebase/fb";
// // Finally, set up Elm to use Firebase handler
// app.ports.elmToFb.subscribe(msg => fb.handler(msg, app.ports.fbToElm.send));