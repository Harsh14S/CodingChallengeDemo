import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOG_IN_SUCCESS, LOG_IN_FAILED} from '../types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      // console.log('action data', action.payload);
      let obj = action.payload;
      console.log('obj -----> ', obj);
      async function saveUser() {
        await AsyncStorage.setItem('currentUser', JSON.stringify(obj));
      }
      // saveUser();

      return {LoginSuccess: true, data: action.payload};

    case LOG_IN_FAILED:
      return {LoginSuccess: false, error: action.payload};

    default:
      return state;
  }
};
