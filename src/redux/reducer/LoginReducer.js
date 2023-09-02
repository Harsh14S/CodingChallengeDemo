import AsyncStorage from '@react-native-async-storage/async-storage';
import {SIGN_UP_SUCCESS, SIGN_UP_FAILED} from '../types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      // console.log('action data', action.payload);
      let obj = action.payload;
      console.log('obj -----> ', obj);
      async function saveUser() {
        await AsyncStorage.setItem('currentUser', JSON.stringify(obj));
      }
      // saveUser();

      return {SignUpSuccess: true, data: action.payload};

    case SIGN_UP_FAILED:
      return {SignUpSuccess: false, error: action.payload};

    default:
      return state;
  }
};
