import { takeEvery } from 'redux-saga/effects';
import { fetchCamp, FETCH_REQUEST_START } from '../modules/load';
import { fetchFacilities as addFetch, FETCH_REQUEST_START as ADD_START } from '../modules/addFacility';
function* sagas() {
  yield takeEvery(FETCH_REQUEST_START, fetchCamp);
  yield takeEvery(ADD_START, addFetch);
}

export default sagas;
