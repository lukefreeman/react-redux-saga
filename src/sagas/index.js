import { all } from 'redux-saga/effects';
import {userSagas} from './users';

/**
* ----------------------------------------------------------------------
* create watcher
* ----------------------------------------------------------------------
*/
function* rootSaga() {
    yield all([
        ...userSagas
    ]);
}

export default rootSaga;