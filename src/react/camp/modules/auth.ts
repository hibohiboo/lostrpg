import * as firebase from 'firebase';
import { createAction, handleActions } from 'redux-actions';
import { call, put } from 'redux-saga/effects';
import { getUser, getUserId } from '../firebase';
import {  LOGIN_SUCCESS, loginSuccess } from './user';
/**
 * actionType
 */
export const AUTH_CHECK = 'AUTH_CHECK';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const AUTH_FAIL = 'AUTH_FAIL';

/**
 * actionを発行
 */
export const authCheck = createAction(AUTH_CHECK);
const authSuccess = createAction(AUTH_SUCCESS);
const authFail = createAction(AUTH_FAIL);

/**
 * firebaseの認証情報を取得できたらSUCCESS
 *
 * @param action
 */
export function* checkAuth(action: {type: string}) {
  try {
    const uid = yield call(getUserId);
    yield put({ type: AUTH_SUCCESS, payload:{ uid } });
    const user = yield call(getUser, uid);
    if (user !== null) {
      yield put({ type:LOGIN_SUCCESS, payload: { user } });
    }
  } catch (e) {
    yield put({ type: AUTH_FAIL, message: e.message });
  }
}

export class AuthState {
  constructor(
    public isAuthenticated: boolean = false,
    public uid?: string) {
  }
}

/**
 * reducer
 */
export const authReducer = handleActions({
  [AUTH_SUCCESS]: (state: AuthState,  { payload: { uid } }: any) => {
    return new AuthState(true, uid);
  },
  [AUTH_FAIL]: (state: AuthState) => {
    return new AuthState(false);
  },
},                                       new AuthState());
