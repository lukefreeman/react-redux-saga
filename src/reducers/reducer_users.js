import { USER_FETCH_SUCCEEDED, USER_FETCH_FAILED  } from '../actions/types';

const INITIAL_STATE = {
    user: {}
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
		case USER_FETCH_SUCCEEDED:
            return {...state, user: action.user.data}
        case USER_FETCH_FAILED:            
            return state;
    default:
        return state;
    }
}