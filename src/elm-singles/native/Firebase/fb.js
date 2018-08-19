
// ********** C O N F I G
import firebase from 'firebase';
import config from "./fb.config.json";

firebase.initializeApp(config);
var auth = firebase.auth();

// 認証チェック
auth.onAuthStateChanged(async function(u) {
  if (u) {
    var user = await makeUser(u);
    window.localStorage.setItem('session', JSON.stringify(user));
  }
});

/**
 * 認証結果からユーザ情報を取得して返す。
 * @param {*} u 
 */
async function makeUser(u){
  const url = "https://us-central1-lostrpg-751c1.cloudfunctions.net/fetchMember/?uid=" + u.uid;
  const response = await fetch(url);
  const member = await response.json();
  const token = await auth.currentUser.getIdToken(true);
  const user = {
    "email": "",
    "token": token,
    "username": member.twitterName,
    "bio": null,
    "image": null,
    "createdAt": "2018-05-27T01:15:06.996Z",
    "updatedAt": "2018-05-27T01:15:07.002Z",
    "uid": u.uid,
    "twitterId": member.twitterId,
    "twitterName": member.twitterName
  };
  return user;
}

export function redirectTwitter() {
return auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
.then(() => {
  const provider = new firebase.auth.TwitterAuthProvider();
  auth.signInWithRedirect(provider);
});
}