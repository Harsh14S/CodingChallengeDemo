import {all} from 'redux-saga/effects';
import GetTodoDataSagaSaga from './GetTodoDataSaga';
import GetPostsDataSaga from './GetPostsDataSaga';
import SignUpSaga from './SignUpSaga';

export function* rootSaga() {
  yield all([SignUpSaga(), GetTodoDataSagaSaga(), GetPostsDataSaga()]);
}
