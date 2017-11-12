
document.getElementById('login').addEventListener('click',()=>{
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithRedirect(provider);
  })
});

document.getElementById('logout').addEventListener('click',()=>{
  firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
});

firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
      var token = result.credential.accessToken;
      var secret = result.credential.secret;
  }
  // The signed-in user info.
  var user = result.user;
  console.log(result);
  var twitterId = result.additionalUserInfo.username;
  var twitterName = user.displayName;
  var userId = user.uid;
  console.log(`twitterId:${twitterId}`);
  console.log(`name:${twitterName}`);
  var db = firebase.database();
  var ref = db.ref(`/users/${twitterId}`);
  ref.set({
      userId,
      twitterId,
      twitterName
  });

});