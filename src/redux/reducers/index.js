import { combineReducers } from 'redux';
import authReducer from './authReducer';
import filterReducer from './filterReducer';

export { authReducer };

const rootReducer = combineReducers({
  filter: filterReducer,
});

export default rootReducer;
