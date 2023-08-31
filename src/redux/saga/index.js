import {all} from 'redux-saga/effects';
import SignUpSaga from './SignUpSaga';

export function* rootSaga() {
  yield all([SignUpSaga()]);
}
