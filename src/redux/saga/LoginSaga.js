import {put, call, takeEvery, take} from 'redux-saga/effects';
import {LOG_IN_SUCCESS, LOG_IN_REQUEST, LOG_IN_FAILED} from '../types';

function* LoginAsync({params}) {
  try {
    yield put({type: LOG_IN_SUCCESS, payload: params});
  } catch (e) {
    yield put({type: LOG_IN_FAILED, payload: e});
  }
}

export function* LoginSaga() {
  yield takeEvery(LOG_IN_REQUEST, LoginAsync);
}
export default LoginSaga;
