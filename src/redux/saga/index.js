import {all} from 'redux-saga/effects';
import GetTodoDataSaga from './GetTodoDataSaga';
import GetPostsDataSaga from './GetPostsDataSaga';
import SignUpSaga from './SignUpSaga';
import LoginSaga from './LoginSaga';
import CurrentUserSaga from './CurrentUserSaga';

export function* rootSaga() {
  yield all([
    SignUpSaga(),
    LoginSaga(),
    CurrentUserSaga(),
    GetTodoDataSaga(),
    GetPostsDataSaga(),
  ]);
}
