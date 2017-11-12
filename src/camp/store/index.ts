import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'; // tslint:disable-line
import reducers from '../reducers';
import sagas from '../sagas';

// Saga ミドルウェアを作成する
const sagaMiddleware = createSagaMiddleware();

// Store にマウントする
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, createLogger()),
  // applyMiddleware(sagaMiddleware),

);

// Saga を起動する
sagaMiddleware.run(sagas);

export default store;
