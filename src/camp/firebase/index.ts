import * as firebase from 'firebase';
import Camp from '../models/Camp';
import { CampName } from '../models/Camp';
import User from '../models/User';
import FirebaseStrategy from './FirebaseStrategy';

const config = require('./config');


const strategy = new FirebaseStrategy(config);
strategy.redirectResult();

/**
 * ツイッターの認証ページへ飛ばす
 */
export const redirectTwitter = () => {
  strategy.redirectTwitter();
};

/**
 * ログアウト
 */
export const logout = () => {
  return strategy.logout();
};

/**
 * userが取得できればuidを返す。そうでなければnullを返す。
 */
export async function getUserId() {
  return strategy.getUID();
}

/**
 * データベースからユーザ情報を取得する
 */
const getUserFromDb = (uid: string) => {
  return strategy.getMember(uid);
};

/**
 * データベースからユーザ情報を取得する
 */
export async function getUser(uid) {
  return getUserFromDb(uid);
}

/**
 * firebaseデータベースに保存する
 * @param camp
 * @param user
 */
export async function put(camp: Camp, user: User) {
  strategy.createCampAndCampName(camp, user);
}

/**
 * データベースのキャンプを更新する
 */
export async function post(camp: Camp, user: User) {
  return await strategy.updateCampAndCampName(camp, user);
}

/**
 * データベースからキャンプ一覧を取得する
 */
export async function fetchCamps() {
  return strategy.getCampNames();
}

/**
 * データベースからキャンプを取得する
 */
export async function get(id) {
  return await strategy.getCamp(id);
}
