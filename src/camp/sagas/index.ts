import { takeEvery } from 'redux-saga/effects';
import { FETCH_REQUEST_START as ADD_START,
         fetchFacilities as addFetch } from '../modules/addFacility';
import { AUTH_CHECK, checkAuth } from '../modules/auth';
import { FETCH_REQUEST_START as FETCH_CAMP, fetchCamp,
         PUT_REQUEST, putCamp } from '../modules/camp';
import { FETCH_REQUEST as FETCH_CAMPS, fetchCamps } from '../modules/camps';
function* sagas() {
  yield takeEvery(FETCH_CAMP, fetchCamp);
  yield takeEvery(ADD_START, addFetch);
  yield takeEvery(PUT_REQUEST, putCamp);
  yield takeEvery(AUTH_CHECK, checkAuth);
  yield takeEvery(FETCH_CAMPS, fetchCamps);
}

export default sagas;
