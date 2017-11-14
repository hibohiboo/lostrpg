import { takeEvery } from 'redux-saga/effects';
import { FETCH_REQUEST_START as ADD_START,
         fetchFacilities as addFetch } from '../modules/addFacility';
import { FETCH_REQUEST_START, fetchCamp,
         PUT_REQUEST, putCamp } from '../modules/camp';
import { AUTH_CHECK, checkAuth } from '../modules/auth'

function* sagas() {
  yield takeEvery(FETCH_REQUEST_START, fetchCamp);
  yield takeEvery(ADD_START, addFetch);
  yield takeEvery(PUT_REQUEST, putCamp);
  yield takeEvery(AUTH_CHECK, checkAuth);
}

export default sagas;
