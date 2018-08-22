var app = Elm.Main.fullscreen(localStorage.session || null);

// 別タブでの更新を反映する（同じタブでのstorageイベントは拾わないので注意）
window.addEventListener("storage", function(event) {
  if (event.storageArea === localStorage && event.key === "session") {
    app.ports.onSessionChange.send(event.newValue);
  }
}, false);

// カスタムイベントを待ち受ける。ローカルストレージへのセッションの保存をelmに伝える
document.addEventListener('sessionSet', function (e) { 
  console.log('session', localStorage.session)
  app.ports.onSessionChange.send(localStorage.session);
 }, false);

import {redirectTwitter} from './Firebase/fb';

//ElmからJSへはsubscribe
app.ports.redirectTwitter.subscribe(function() {
  redirectTwitter();
});

app.ports.redirectTop.subscribe(function() {
  location.href = '/';
});
