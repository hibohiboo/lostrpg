import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { facilitiesReducer as facilities } from '../modules/facilities';
import { facilitiesReducer as addFacilities} from '../modules/addFacility';
import { createAction, handleActions } from 'redux-actions';
const LOAD = 'camp/LOAD'

// 最終的なstoreの値
const app = combineReducers({
  addFacilities,
  facilities,
  form: formReducer,
});
export default app;
