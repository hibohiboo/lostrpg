import { createAction, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { put as putDatabase} from '../firebase';
import Facility from '../models/Facility';
import Camp from '../models/Camp';
import User from '../models/User';

/**
 * actionType
 */
export const FETCH_REQUEST_START = 'camp/fetch_request_start';
const FETCH_REQUEST_SUCCESS = 'camp/fetch_request_success';
const FETCH_REQUEST_FAILED = 'camp/fetch_request_failed';

/**
 * actionを発行
 */
export const fetchStart = createAction(FETCH_REQUEST_START, (url: string) => ({ url }));

async function getCamp(url: string) {
  const response =  await fetch(url);
  const camp: Camp = await response.json();
  return camp;
}

// saga:
export function* fetchCamp(action: {type: string, payload: {url: string}}) {
  const { url } = action.payload;
  try {
    const camp: Camp = yield call(getCamp, url);
    yield put({ type: FETCH_REQUEST_SUCCESS, payload:{ camp } });
  } catch (e) {
    yield put({ type: FETCH_REQUEST_FAILED, message: e.message });
  }
}

/**
 * reducer
 */
export const campReducer = handleActions({
  [FETCH_REQUEST_SUCCESS]: (state: Camp,  { payload: { camp } }: any) => {
    console.log(camp);
    return camp;
  },
},                                       null);

export const PUT_REQUEST = 'CAMP_PUT_REQUESTED';
export const putRequsetCamp = createAction(PUT_REQUEST, camp => ({ camp }));

export const PUT_FAILED = 'CAMP_PUT_FAILED';
export const putFailureCamp = createAction(PUT_FAILED, message => message);

export const PUT_SUCCESS = 'CAMP_PUT_SUCCEEDED';
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

