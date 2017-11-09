import { takeEvery } from 'redux-saga/effects';
import { facilitiesSaga } from '../modules/facilities';

function* sagas() {
  yield facilitiesSaga();
}

export default sagas;
