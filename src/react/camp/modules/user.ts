import * as firebase from 'firebase';
import { createAction, handleActions } from 'redux-actions';
import User from '../models/User';

/**
 * actionType
 */
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

/**
 * actionを発行
 */
export const loginSuccess = createAction(LOGIN_SUCCESS, (user: User) => ({ user }));

/**
 * reducer
 */
export const userReducer = handleActions({
  [LOGIN_SUCCESS]: (state: User,  { payload: { user } }: any) => {
    return user;
  },
},                                       null);
