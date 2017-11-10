import { handleActions, createAction } from 'redux-actions';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import Facility from '../models/Facility';

/**
 * actionType
 */
const FETCH_REQUEST_START = 'addFacility/fetch_request_start';
const FETCH_REQUEST_SUCCESS = 'addFacility/fetch_request_success';
const FETCH_REQUEST_FAILED = 'addFacility/fetch_request_failed';

/**
 * actionを発行
 */
export const fetchStart = createAction(FETCH_REQUEST_START, (url: string) => ({ url }));

async function getFacilities(url:string){
  const response =  await fetch(url);
  const facilities:Facility[] = await response.json();
  return facilities;
}

// saga:
function* fetchFacilities(action: {type: string, payload: {url:string}}) {
  const { url } = action.payload;
  try {
    const list: Facility[] = yield call(getFacilities, url);
    yield put({ type: FETCH_REQUEST_SUCCESS, payload:{ list } });
  } catch (e) {
    yield put({ type: FETCH_REQUEST_FAILED, message: e.message });
  }
}

export function* facilitiesSaga() {
 yield takeEvery(FETCH_REQUEST_START, fetchFacilities);
}

/**
 * reducer
 */
export const facilitiesReducer = handleActions({
  [FETCH_REQUEST_SUCCESS]: (state: Facility[],  { payload: { list } }: any) => {
    return list.map(m => new Facility(m));
  },
}, []);