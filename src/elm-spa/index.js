'use strict';

// index.htmlがdistにコピーされるようにRequireする
require('./index.html');

var Elm = require('./src/Main.elm');
window.Elm = Elm;