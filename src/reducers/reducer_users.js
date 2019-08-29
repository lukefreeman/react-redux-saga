import { USER_FETCH_SUCCEEDED  } from '../actions/types';

const INITIAL_STATE = {
    user: {}
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
		case USER_FETCH_SUCCEEDED:
        return {...state, user: action.user.data}
    default:
        return state;
    }
}