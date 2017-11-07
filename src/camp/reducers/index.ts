import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// 最終的なstoreの値は
const app = combineReducers({
  form: formReducer,
});
export default app;
