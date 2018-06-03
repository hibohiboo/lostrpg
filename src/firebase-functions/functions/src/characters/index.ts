import Character from './models/Character';
import * as functions from 'firebase-functions'; 
// The Firebase Admin SDK to access the Firebase Realtime Database.
import * as admin from 'firebase-admin';
import {resSend} from '../util';


export function formatCharacter(obj){
  const {id, name, twitterId, twitterName, uid} = obj;
  return new Character(id, name, twitterId, twitterName, uid, uid)
}

export const fetchCharacters =
  functions.https.onRequest(async (req, res) => {
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
  });