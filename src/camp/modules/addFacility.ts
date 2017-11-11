import { createAction, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import Facility from '../models/Facility';

/**
 * actionType
 */
export const FETCH_REQUEST_START   = 'addFacility/fetch_request_start';
const FETCH_REQUEST_SUCCESS = 'addFacility/fetch_request_success';
const FETCH_REQUEST_FAILED  = 'addFacility/fetch_request_failed';

/**
 * actionを発行
 */
export const fetchStart = createAction(FETCH_REQUEST_START, (url: string) => ({ url }));

async function getFacilities(url: string) {
  console.log('get')
  console.log(url)
  const response =  await fetch(url);
  const facilities: Facility[] = await response.json();
  return facilities;
}

// saga:
export function* fetchFacilities(action: {type: string, payload: {url: string}}) {
  const { url } = action.payload;
  try {
    const list: Facility[] = yield call(getFacilities, url);
    yield put({ type: FETCH_REQUEST_SUCCESS, payload:{ list } });
  } catch (e) {
    yield put({ type: FETCH_REQUEST_FAILED, message: e.message });
  }
}

/**
 * reducer
 */
export const facilitiesReducer = handleActions({
  [FETCH_REQUEST_SUCCESS]: (state: Facility[],  { payload: { list } }: any) => {
    return list.map(m => new Facility(m));
  },
},                                             []);
