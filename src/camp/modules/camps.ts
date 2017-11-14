
import { createAction, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { put as putDatabase, fetchCamps as fetchListDatabase } from '../firebase';
import Camp from '../models/Camp';
import User from '../models/User';

export const FETCH_REQUEST = 'CAMP_FETCH_REQUESTED';
export const fetchRequsetCamp = createAction(FETCH_REQUEST);

export const FETCH_FAILED = 'CAMP_PUT_FAILED';
export const fetchFailureCamp = createAction(FETCH_FAILED, message => message);

export const FETCH_SUCCESS = 'CAMP_PUT_SUCCEEDED';
export const fetchSuccessCamp = createAction(FETCH_SUCCESS, camps => ({ camps }));

export function* fetchCamps(action: {type: string}) {
  try {
    const campList:Camp[] = yield call(fetchListDatabase);
    yield put({ type: FETCH_SUCCESS, payload:{ camps: campList } });
  } catch (e) {
    yield put({ type: FETCH_FAILED, message: e.message });
  }
}

