import { takeEvery } from 'redux-saga/effects';
import { FETCH_REQUEST_START as ADD_START,
         fetchFacilities as addFetch } from '../modules/addFacility';
import { FETCH_REQUEST_START, fetchCamp } from '../modules/load';
function* sagas() {
  yield takeEvery(FETCH_REQUEST_START, fetchCamp);
  yield takeEvery(ADD_START, addFetch);
}

export default sagas;
