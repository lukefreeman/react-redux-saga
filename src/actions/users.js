import { USER_FETCH_REQUESTED } from './types';

export function fetchUser(id) {
    return {
        type: USER_FETCH_REQUESTED,
        payload: {id}	
    };
}