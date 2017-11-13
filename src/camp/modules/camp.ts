
import { createAction, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { put as putDatabase } from '../firebase';
import Camp from '../models/Camp';
import User from '../models/User';

export const PUT_REQUEST = 'TODO_LIST_PUT_REQUESTED';
export const putRequsetCamp = createAction(PUT_REQUEST, camp => ({ camp }));

export const PUT_FAILED = 'TODO_LIST_PUT_FAILED';
export const putFailureCamp = createAction(PUT_FAILED, message => message);

export const PUT_SUCCESS = 'TODO_LIST_PUT_SUCCEEDED';
export const putSuccessCamp = createAction(PUT_SUCCESS, camp => ({ camp }));

export function* putCamp(action: {type: string, payload: {camp: Camp}}) {
  try {
    const user: User = yield select((state: {user: User}) => state.user);
    yield call(putDatabase, action.payload.camp, user);
    yield put({ type: PUT_SUCCESS, payload:{ camp: action.payload.camp } });
  } catch (e) {
    yield put({ type: PUT_FAILED, message: e.message });
  }
}
