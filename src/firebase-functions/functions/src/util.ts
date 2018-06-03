/**
 * レスポンス共通設定
 * @param res 
 * @param sendObject 
 */
export const resSend = (res, sendObject) => {
  res.header('Content-Type','application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.send(sendObject);
}