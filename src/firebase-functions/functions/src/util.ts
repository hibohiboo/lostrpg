import Auth from './auth';

/**
 * レスポンス共通設定
 * @param res 
 * @param sendObject 
 */
export const resSend = (res, sendObject) => {
  res.header('Content-Type','application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');
  res.send(sendObject);
}
export const resReject = (res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');
  res.header('WWW-Authenticate', 'Bearer error="invalid_token"');
  res.status(403).send('Unauthorized');
}

export const auth = async (req, res, storage) => {
  try{
    const a = new Auth(storage);
    return await a.authenticate(req, res);
  }catch(e){
    resReject(res);
    return null;
  }
}


