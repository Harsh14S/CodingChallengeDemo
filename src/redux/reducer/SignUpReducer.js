import AsyncStorage from '@react-native-async-storage/async-storage';
import {SIGN_UP_SUCCESS, SIGN_UP_FAILED} from '../types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      console.log('action data', action.payload);
      let obj = {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
      async function saveUSer() {
        await AsyncStorage.setItem('userData', JSON.stringify(obj));
      }
      saveUSer();
      console.log('obj', obj);

      return {SignUpSuccess: true, data: action.payload};

    case SIGN_UP_FAILED:
      return {SignUpSuccess: false, error: action.payload};

    default:
      return state;
  }
};
