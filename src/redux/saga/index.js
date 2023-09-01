import {all} from 'redux-saga/effects';
import SignUpSaga from './SignUpSaga';
import {GetTodoDataAsync} from './GetTodoDataSaga';
import GetPostsDataSaga from './GetPostsDataSaga';

export function* rootSaga() {
  yield all([SignUpSaga(), GetTodoDataAsync(), GetPostsDataSaga()]);
}
