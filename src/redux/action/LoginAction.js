import {SIGN_UP_REQUEST} from '../types';
export const SignUpAction = params => {
  return {
    type: SIGN_UP_REQUEST,
    params,
  };
};
