import * as functions from 'firebase-functions'; 
import * as admin from 'firebase-admin';
// 本番環境用
admin.initializeApp(functions.config().firebase);

export default class Storage {
  private CHARACTER = 'character';
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
  public async addMessage(original) {
    const snapshot = await admin.database().ref('/messages').push({original: original});
    return snapshot.ref;
  }

  public async fetchCharacters(){
    const ref = admin.database().ref(`/${this.CHARACTER}`);

    const snapshot = await ref.once('value');
    const characters = snapshot.val();
    const count = this.getCharacterCount();
    return {characters, charactersCount: count};
  }

  public async createCharacter(obj){
    const ref = admin.database().ref(`/${this.CHARACTER}`);
    const now = Date.now();
    const snapshot = await ref.push({
      ...obj,
      updatedAt: now,
      createdAt: now
    });
    const snapshot2 = await snapshot.ref.once('value');
    const char = snapshot2.val();

    await this.addCharacterCount();

    return char;
  }

  public async updateCharacter(id, obj){
    const ref = admin.database().ref(`/${this.CHARACTER}/${id}`);
    const now = Date.now();
    const result = {
      ...obj,
      updatedAt: now,
    };
    ref.set(result);
    return result;
  }

  private async addCharacterCount(){
    const ref = admin.database().ref(`/${this.CHARACTER}/count`);
    const snapshot = await ref.once('value');
    const count = snapshot.val();
    if(count){
      ref.set(count + 1);
    }else{
      ref.set(1);
    }
  }
  private async getCharacterCount(){
    const ref = admin.database().ref(`/${this.CHARACTER}/count`);
    const snapshot = await ref.once('value');
    const count = snapshot.val();
    return count;
  }
}