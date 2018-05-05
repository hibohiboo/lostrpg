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

//ElmからJSへはsubscribe
app.ports.hello.subscribe(function(fromElm) {

  console.log(fromElm);
  //JSからElmへはsend
  app.ports.jsHello.send("Hi!");

});

//JSからElmへsend
app.ports.jsHello.send("Elm! hellooooo");

// F i r e b a s e

// ********** C O N F I G
// import config from "./Firebase/fb.config.json";

// console.log("Using project:", config.projectId);
// firebase.initializeApp(config);
// // Load main firebase handler
// import fb from "./Firebase/fb";
// // Finally, set up Elm to use Firebase handler
// app.ports.elmToFb.subscribe(msg => fb.handler(msg, app.ports.fbToElm.send));