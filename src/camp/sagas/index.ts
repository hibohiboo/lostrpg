import { takeEvery } from 'redux-saga/effects';
import { fetchFacilities, FETCH_REQUEST_START } from '../modules/facilities';
import { fetchFacilities as addFetch, FETCH_REQUEST_START as ADD_START } from '../modules/addFacility';
function* sagas() {
  yield takeEvery(FETCH_REQUEST_START, fetchFacilities);
  yield takeEvery(ADD_START, addFetch);
}

export default sagas;
