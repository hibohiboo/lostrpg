function handler({message, payload}, fbToElm) {
  // console.log(message, payload);
  switch (message) {
      case "ListenAuthState":
          createAuthListener(fbToElm);
          break;
  }
}

function createAuthListener(fbToElm) {
  // console.log("[createAuthListener] starting");
  firebase.auth()
      .onAuthStateChanged(function(user) {
          // console.log("[createAuthListener]", user);

          if (user) {
              fbToElm(makeUserObject(user))
          } else {
              fbToElm({
                  message: "authstate",
                  payload: null
              });
          }
      });
}

function makeUserObject(user) {
  return {
      message: "authstate",
      payload: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          token: user.token,
          twitterId: user.twitterId,
          twitterName: user.twitterName,
      }
  };
}
