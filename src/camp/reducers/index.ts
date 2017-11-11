import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { campReducer as camp} from '../modules/load';
import { facilitiesReducer as addFacilities} from '../modules/addFacility';
import { createAction, handleActions } from 'redux-actions';

// 最終的なstoreの値
const app = combineReducers({
  addFacilities,
  camp,
  form: formReducer,
});
export default app;
