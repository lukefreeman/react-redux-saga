import { 
    USER_FETCH_REQUESTED, 
    USER_FETCH_SUCCEEDED, 
    USER_FETCH_FAILED } from '../actions/types';

import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../api/';

/**
* ----------------------------------------------------------------------
* fetchUser worker saga
* ----------------------------------------------------------------------
*/
function* fetchUser(action) {
    try {
        const user = yield call(Api.fetchUser, action.payload.id);
        yield put({type: USER_FETCH_SUCCEEDED, user: user});
    } catch (e) {
        yield put({type: USER_FETCH_FAILED, message: e.message});
    }
}

/**
* ----------------------------------------------------------------------
* create watcher
* ----------------------------------------------------------------------
*/
function* mySaga() {
    yield takeEvery(USER_FETCH_REQUESTED, fetchUser);
}

export default mySaga;