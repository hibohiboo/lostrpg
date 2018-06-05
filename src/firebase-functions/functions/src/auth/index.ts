import Storage from '../firebase';

export default class Auth {
  constructor(private storage:Storage){
    //
  }

  async authenticate (req, res) {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
      console.log('bear?')
      res.status(403).send('Unauthorized');
      return null;
    }
    const idToken = req.headers.authorization.split('Bearer ')[1];
    console.log('idToken')
    console.log(idToken)
    return  new Promise((resolve, reject) => {
      this.storage.authVerifyToken(idToken)
      .then((decodedIdToken) => {
        req.user = decodedIdToken;
        console.log(decodedIdToken);
        resolve(decodedIdToken);
      }).catch(() => {
        console.log('storage?')
        res.status(403).send('Unauthorized');
        reject(Error('Unauthorized'));
      });
    });
  }
}