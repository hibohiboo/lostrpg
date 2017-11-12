import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { facilitiesReducer as addFacilities } from '../modules/addFacility';
import { campReducer as camp } from '../modules/load';

// 最終的なstoreの値
const app = combineReducers({
  addFacilities,
  camp,
  form: formReducer,
});
export default app;
