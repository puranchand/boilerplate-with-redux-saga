import { combineReducers } from 'redux';
import shares from './share';
import users from './user';

const rootReducer = combineReducers({
  users: users,
  shares: shares,
});

export default rootReducer;