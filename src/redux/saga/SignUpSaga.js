import {put, call, takeEvery, take} from 'redux-saga/effects';
import {SIGN_UP_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_FAILED} from '../types';

export function* SignUpAsync({params}) {
  try {
    // const response = yield call(Api.Login, params);
    // console.log("data details 12345667778", response, params)
    yield put({type: SIGN_UP_SUCCESS, payload: response});
  } catch (e) {
    // console.log("login error saga--->", e);
    yield put({type: SIGN_UP_FAILED, payload: e});
  }
}

export function* SignUpSaga() {
  yield takeEvery(SIGN_UP_REQUEST, SignUpAsync);
}
export default SignUpSaga;
