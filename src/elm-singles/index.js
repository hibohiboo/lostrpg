'use strict';

// index.htmlがdistにコピーされるようにRequireする
//require('./public/index.html');

var Elm = require('./src/Main.elm');
window.Elm = Elm;
