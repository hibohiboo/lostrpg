import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import { facilitiesReducer as addFacilities } from '../modules/addFacility';
import { campReducer as camp } from '../modules/camp';
import { campsReducer as camps } from '../modules/camps';

import { authReducer as auth } from '../modules/auth';
import { userReducer as user } from '../modules/user';

// 最終的なstoreの値
const app = combineReducers({
  addFacilities,
  camp,
  camps,
  user,
  auth,
  form: formReducer,
});
export default app;
