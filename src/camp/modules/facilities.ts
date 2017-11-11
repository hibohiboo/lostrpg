import { createAction, handleActions } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import Facility from '../models/Facility';

/**
 * actionType
 */
export const FETCH_REQUEST_START = 'facilities/fetch_request_start';
const FETCH_REQUEST_SUCCESS = 'facilities/fetch_request_success';
const FETCH_REQUEST_FAILED = 'facilities/fetch_request_failed';

/**
 * actionを発行
 */
export const fetchStart = createAction(FETCH_REQUEST_START);

async function getFacilities() {
  const response =  await fetch('defaultFacilities.json');
  const facilities: Facility[] = await response.json();
  return facilities;
}

// saga:
export function* fetchFacilities(action: {type: string;}) {
  try {
    const list: Facility[] = yield call(getFacilities);
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
