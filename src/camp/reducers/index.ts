import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// 最終的なstoreの値は
const App = combineReducers({
  form: formReducer,
});
export default App;
