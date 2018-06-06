// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions'; 
import CharactersWidget from './characters';
import {resSend, auth} from './util';
import Storage from './firebase';

exports.characters = functions.https.onRequest(async (req, res) => {
  const storage = new Storage();
  const charactersWidget = new CharactersWidget(storage);
  const method = req.method;
  let result = null;

  if (method === 'GET') {
    const {limit, offset} = req.query;
    result = await charactersWidget.fetch(+limit, +offset);
  }
  else if(method === 'POST' && req.params[0] && req.params[0].slice(1)) {
    await auth(req, res, storage);

    const id = req.params[0].slice(1);
    result = await charactersWidget.update(id, req.body);
  }
  else if(method === 'POST'){
    await auth(req, res, storage);

    result = await charactersWidget.add(req.body);
  }

  resSend(res, result);
});
  
export const fetchMember =functions.https.onRequest(async (req, res) => {
  const storage = new Storage();
  const uid = req.query.uid;
  const member = await storage.fetchMember(uid);

  resSend(res, member);
});

export const addMessage = functions.https.onRequest( async (req, res) => {
  const storage = new Storage();

  // Grab the text parameter.
  const original = req.query.text;
  const ref = await storage.fetchMember(original);
  res.redirect(303, ref);
});

export const makeUppercase = 
  functions.database.ref('/messages/{pushId}/original')
                    .onWrite((change, context) => {
  // Grab the current value of what was written to the Realtime Database.
  const event = change.after;
  const original = event.val();

  const uppercase = original.toUpperCase();
  // You must return a Promise when performing asynchronous tasks inside a Functions such as
  // writing to the Firebase Realtime Database.
  // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
  return event.ref.parent.child('uppercase').set(uppercase);
});

