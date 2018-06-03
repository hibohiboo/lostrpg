import Character from './models/Character';
import * as functions from 'firebase-functions'; 
// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from 'firebase-admin';
import {resSend} from '../util';

export const characterWidgets = functions.https.onRequest(async (req, res) => {
  if (req.method === 'GET') {
    return fetch(req, res);
  }
  const name = req.query.name;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const ref = admin.database().ref('/character');
  const snapshot = await ref.push({name});
  res.redirect(303, snapshot.ref);
});
  
  // private

  function formatCharacter(obj){
    const {id, name, twitterId, twitterName, uid} = obj;
    return new Character(id, name, twitterId, twitterName, uid, uid)
  }

  async function fetch (req, res) {
    const ref = admin.database().ref('/character');

    const snapshot = await ref.once('value');
    const characters = snapshot.val();
    const characterList = Object.keys(characters)
      .map(id => {
      const char = characters[id];
      char.id = id;
      const fc = formatCharacter(char);
      return fc;
    });
    const result = {
      'characters' : characterList,
      'charactersCount': ref.child.length
    }

    resSend(res, result);
  }