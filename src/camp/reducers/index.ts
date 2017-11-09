import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { facilitiesReducer as facilities } from '../modules/facilities';

// 最終的なstoreの値は
const app = combineReducers({
  facilities,
  form: formReducer,
});
export default app;
