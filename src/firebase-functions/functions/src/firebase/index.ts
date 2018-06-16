import * as functions from 'firebase-functions'; 
import * as admin from 'firebase-admin';

// 本番環境用
admin.initializeApp(functions.config().firebase);

// ローカル検証用
// const path = process.env.GOOGLE_APPLICATION_CREDENTIALS;
// const serviceAccount = require(path);
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://lostrpg-751c1.firebaseio.com'
// });

export default class Storage {
  private static CHARACTER = '/character';
  private static CHARACTER_LIST = `${Storage.CHARACTER}/list`;
  private static CHARACTER_COUNT = `${Storage.CHARACTER}/count`;

  public authVerifyToken(idToken) {
    return admin.auth().verifyIdToken(idToken)
  }

  public async fetchMember(uid){
    const ref = admin.database().ref('/member/' + uid);
    const snapshot = await ref.once('value');
    const member = snapshot.val();
    return member;
  }

  public async addMessage(original) {
    const snapshot = await admin.database().ref('/messages').push({original: original});
    return snapshot.ref;
  }

  public async fetchCharacters(limit:number, offset:number){
    const ref = admin.database()
                     .ref(`${Storage.CHARACTER_LIST}`)
                     .orderByChild('sort')
                     .startAt(offset)
                     .endAt(limit + offset-1);

    const snapshot = await ref.once('value');
    const characters = snapshot.val();
    const count = await this.getCharacterCount();
    return {characters, charactersCount: count};
  }

  public async createCharacter(obj){
    const ref = admin.database().ref(`${Storage.CHARACTER_LIST}`);
    return ref.transaction( async a => {
      const now = Date.now();
      const cnt = await this.getCharacterCount();
      const o = {
        ...obj,
        sort: cnt,
        updatedAt: now,
        createdAt: now
      };
      const pushedPostRef = await ref.push(o);
  
      await this.addCharacterCount();
      return {
        ...o,
        slug: pushedPostRef.getKey()
      };
    });
  }

  public async updateCharacter(id, obj){
    const ref = admin.database().ref(`${Storage.CHARACTER_LIST}/${id}`);
    const now = Date.now();
    const result = {
      ...obj,
      updatedAt: now,
    };
    ref.set(result);
    return {
      ...result,
      slug: id
    };
  }

  private async addCharacterCount(){
    const ref = admin.database().ref(`${Storage.CHARACTER_COUNT}`);
    const snapshot = await ref.once('value');
    const count = snapshot.val();
    if(count){
      ref.set(count + 1);
    }else{
      ref.set(1);
    }
  }
  private async getCharacterCount(){
    const ref = admin.database().ref(`${Storage.CHARACTER_COUNT}`);
    const snapshot = await ref.once('value');
    const count = snapshot.val();
    if(!count){
      return 0;
    }
    return count;
  }
}