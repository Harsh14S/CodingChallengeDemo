import {put, call, takeEvery, take} from 'redux-saga/effects';
import {SIGN_UP_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_FAILED} from '../types';

function* SignUpAsync({params}) {
  try {
    yield put({type: SIGN_UP_SUCCESS, payload: params});
  } catch (e) {
    yield put({type: SIGN_UP_FAILED, payload: e});
  }
}

export function* SignUpSaga() {
  yield takeEvery(SIGN_UP_REQUEST, SignUpAsync);
}
export default SignUpSaga;
