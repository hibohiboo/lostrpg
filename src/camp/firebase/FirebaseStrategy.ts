
import * as firebase from 'firebase';
export default class FirebaseStrategy {
  private user: any;
  private database: any;
  private auth: any;
  private MEMBER = 'member';
  private CAMP = 'camp';
  private CAMP_NAME = 'campName';

  // private storage: any;

  constructor(config) {
    firebase.initializeApp(config);
    const auth = firebase.auth();
    this.auth = auth;

    const database = firebase.database();
    this.database = database;

    // const storage = firebase.storage();
    // this.storage = storage;
  }

  /* Utilities */
  public databaseRef(path: string): firebase.database.Reference {
    return this.database.ref(path);
  }

  public async getUser() {
    if (this.user) { return this.user; }

    const user = await new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((u) => {
        if (u) {
          resolve(u);
        } else {
          reject(Error('It broke'));
        }
      });
    });

    return user;
  }

  /* Strategy Implements */

  public async getUID() {
    const { uid } = await this.getUser();
    return uid;
  }

  public redirectTwitter() {
    return this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      const provider = new firebase.auth.TwitterAuthProvider();
      this.auth.signInWithRedirect(provider);
    });
  }

  public logout() {
    return this.auth.signOut();
  }

  public async getValue(path) {
    return new Promise((resolve, reject) => {
      const ref = this.databaseRef(path);
      ref.on('value', (snapshot) => {
        if (snapshot !== null) {
          return resolve(snapshot.val());
        }
        reject(Error('cannot get value'));
      },     (errorObject) => {
        reject(Error('The read failed: ' + errorObject.code));
      });
    });
  }

  public async getMember(uid) {
    return this.getValue(`/${this.MEMBER}/${uid}`);
  }

  public redirectResult() {
    this.auth.getRedirectResult().then((result) => {
      if (result === null || result.user === null) {
        return;
      }
      if (result.credential) {
        const token = result.credential.accessToken;
        const secret = result.credential.secret;
      }
      // The signed-in user info.
      const user = result.user;
      const ref = this.databaseRef(`/${this.MEMBER}/${user.uid}`);
      ref.set({
        uid: user.uid,
        twitterId: result.additionalUserInfo.username,
        twitterName: user.displayName,
      });
      // 再読み込
      location.href = '/campform/';
    });
  }

  public async createCamp(camp, user) {
    const ref = this.databaseRef(`/${this.CAMP}/`).push();
    const now = Date.now();
    ref.set({
      ...user,
      ...camp,
      createdAt: now,
      updatedAt: now,
    });
    return ref.key;
  }

  public async updateCamp(camp, user) {
    const ref = this.databaseRef(`/${this.CAMP}/${camp.campId}`);
    const now = Date.now();
    ref.set({
      ...user,
      ...camp,
      updatedAt: now,
    });
  }

  public async updateCampName(camp, user, id) {
    const ref = this.databaseRef(`/${this.CAMP_NAME}/${id}`);
    ref.set({ campName: camp.campName, campId:id, twitterId: user.twitterId, uid:user.uid });
  }

  public async createCampAndCampName(camp, user) {
    const key = await this.createCamp(camp, user);
    this.updateCampName(camp, user, key);
  }

  public async updateCampAndCampName(camp, user) {
    this.updateCamp(camp, user);
    this.updateCampName(camp, user, camp.campId);
  }

  public async getCampNames() {
    return this.getValue(`/${this.CAMP_NAME}/`);
  }

  public async getCamp(id) {
    return this.getValue(`/${this.CAMP}/${id}`);
  }
}
