import Storage from '../firebase';

export default class Auth {
  constructor(private storage:Storage){
    //
  }

  async authenticate (req, res) {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
      throw Error('Unauthorized');
    }
    const idToken = req.headers.authorization.split('Bearer ')[1];
    return  new Promise((resolve, reject) => {
      this.storage.authVerifyToken(idToken)
      .then((decodedIdToken) => {
        req.user = decodedIdToken;
        resolve(decodedIdToken);
      }).catch(() => {
        reject(Error('Unauthorized'));
      });
    });
  }
}