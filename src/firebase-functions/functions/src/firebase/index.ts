import * as functions from 'firebase-functions'; 
import * as admin from 'firebase-admin';
// 本番環境用
admin.initializeApp(functions.config().firebase);

export default class Storage {
  constructor(){    


    // ローカル検証用
    // const path = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    // const serviceAccount = require(path);
    // admin.initializeApp({
    //   credential: admin.credential.cert(serviceAccount),
    //   databaseURL: 'https://lostrpg-751c1.firebaseio.com'
    // });
  }
  public async fetchMember(uid){
    const ref = admin.database().ref('/member/' + uid);
    const snapshot = await ref.once('value');
    const member = snapshot.val();
    return member;
  }
  public async addMessage(original, res) {
    const snapshot = await admin.database().ref('/messages').push({original: original});
    return snapshot.ref;
  }

  public async fetchCharacters(){
    const ref = admin.database().ref('/character');

    const snapshot = await ref.once('value');
    const characters = snapshot.val();
    return {characters, charactersCount: ref.child.length};
  }
  public async createCharacter(obj){
    const ref = admin.database().ref('/character');
    const snapshot = await ref.push(obj);
    const snapshot2 = await snapshot.ref.once('value');
    const char = snapshot2.val();
    return char;
  }
}