import {SIGN_UP_SUCCESS, SIGN_UP_FAILED} from '../types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  // console.log("action data", action)
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      // console.log('Signup reducer: ', {
      //   SignUpSuccess: true,
      //   data: action.payload,
      // });
      return {SignUpSuccess: true, data: action.payload};

    case SIGN_UP_FAILED:
      return {SignUpSuccess: false, error: action.payload};

    default:
      return state;
  }
};
