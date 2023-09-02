import AsyncStorage from '@react-native-async-storage/async-storage';
import {CURRENT_USER_SUCCESS, CURRENT_USER_FAILED} from '../types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_USER_SUCCESS:
      // console.log('action data', action.payload);
      let obj = action.payload;
      console.log('obj -----> ', obj);
      async function saveUser() {
        await AsyncStorage.setItem('currentUser', JSON.stringify(obj));
      }
      // saveUser();
      return {CurrentUserSuccess: true, data: action.payload};

    case CURRENT_USER_FAILED:
      return {CurrentUserSuccess: false, error: action.payload};

    default:
      return state;
  }
};
