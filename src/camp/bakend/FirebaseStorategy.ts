/* eslint no-return-await: off */
import * as EventEmitter from 'eventemitter3';
import * as firebase from 'firebase';
import * as _ from 'lodash';
type Handler = (event: string, data: any) => void;

function dataFilter(data) {
  return data.val();
}

function itemFilter(data) {
  if (!data) { return data; }

  return {
    id: data.key,
    ...dataFilter(data),
  };
}

function roomFilter(data) {
  if (!data) { return data; }

  const {
    password,
    ...others,
  } = itemFilter(data);

  return {
    ...others,
    isLocked: Boolean(password),
  };
}

export default class FirebaseStrategy {
  private eventBus: any;
  private user: any;
  private database: any;
  private storage: any;

  constructor(config) {

    this.eventBus = new EventEmitter();

    firebase.initializeApp(config);

    const auth = firebase.auth();

    auth.onAuthStateChanged((user) => {
      this.user = user;
      this.eventBus.emit('auth_state_changed', user);
    });
    auth.signInAnonymously();

    const database = firebase.database();
    this.database = database;

    const storage = firebase.storage();
    this.storage = storage;
  }

  /* Utilities */
  public databaseRef(path: string): firebase.database.Reference {
    return this.database.ref(path);
  }

  public async getUser(): Promise<firebase.auth.UserCredential> {
    if (this.user) { return this.user; }

    const user = await new Promise((resolve) => {
      this.eventBus.once('auth_state_changed', resolve);
    });

    return user;
  }

  /* Strategy Implements */

  public async getUID() {
    const { uid } = await this.getUser();
    return uid;
  }

}
