import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';

const rootReducer = combineReducers({
    user: UsersReducer
});

export default rootReducer;