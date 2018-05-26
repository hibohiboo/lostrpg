function handler({message, payload}, fbToElm) {
   console.log(message, payload);
  switch (message) {
      case "ListenAuthState":
          createAuthListener(fbToElm);
          break;
      case "subscribe":
          subscribe(fbToElm, payload);
          break;
  }
}

function createAuthListener(fbToElm) {
  console.log("[createAuthListener] starting");
  firebase.auth()
      .onAuthStateChanged(function(user) {
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

function subscribe(fbToElm, _ref) {
  firebase.database().ref(_ref)
      .on('value', snapshot => {
          console.log(snapshot);
          fbToElm({
              message: "snapshot",
              payload: {
                  key: _ref,
                  value: snapshot.val()
              }
          });
      });
}


function logger(msg) {
  let reg = new RegExp('hampton-xmas');

  if (reg.test(window.location.href)) {
      console.log("Sending to rollbar", msg);
      Rollbar.error(msg);
  } else {
      console.error("[logger]", msg);
  }
}


export default {
  createAuthListener, handler, logger
};
