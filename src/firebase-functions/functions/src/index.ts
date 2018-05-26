// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions'; 
// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from 'firebase-admin';
import {formatCharacters} from './characters';
// 環境変数取得
const path = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const serviceAccount = require(path);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lostrpg-751c1.firebaseio.com'
});

// 本番環境用
// admin.initializeApp(functions.config().firebase);

const resSend = (res, sendObject) => {
  res.header('Content-Type','application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send(sendObject);
}

export const addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin.database().ref('/messages')
                         .push({original: original})
                         .then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref);
  });
});

export const makeUppercase = 
  functions.database.ref('/messages/{pushId}/original')
                    .onWrite((change, context) => {
  // Grab the current value of what was written to the Realtime Database.
  const event = change.after;
  const original = event.val();
  console.log('Uppercasing', context.params.pushId, original);
  const uppercase = original.toUpperCase();
  // You must return a Promise when performing asynchronous tasks inside a Functions such as
  // writing to the Firebase Realtime Database.
  // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
  return event.ref.parent.child('uppercase').set(uppercase);
});

export const fetchCharacers =
  functions.https.onRequest(async (req, res) => {
    const ref = admin.database().ref('/character');

    const snapshot = await ref.once('value');
    const characters = snapshot.val();
    const characterList = formatCharacters(characters);

    resSend(res, characterList);
  });
export const addCharacter = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const name = req.query.name;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const ref = admin.database().ref('/character');
    const snapshot = await ref.push({name});
    res.redirect(303, snapshot.ref);
  });

  export const fetchMember =
  functions.https.onRequest(async (req, res) => {
    const ref = admin.database().ref('/member/' + req.query.uid);

    const snapshot = await ref.once('value');
    const member = snapshot.val();

    resSend(res, member);
  });