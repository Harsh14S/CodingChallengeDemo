import {LOG_IN_REQUEST} from '../types';
export const LoginAction = params => {
  return {
    type: LOG_IN_REQUEST,
    params,
  };
};
