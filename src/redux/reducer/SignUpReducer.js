import AsyncStorage from '@react-native-async-storage/async-storage';
import {SIGN_UP_SUCCESS, SIGN_UP_FAILED} from '../types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  let message = '';
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      // console.log('action data', action.payload);

      // console.log('obj -----> ', obj);
      async function getAllUser() {
        await AsyncStorage.getItem('allUser').then(res => {
          let data = JSON.parse(res);
          if (data) {
            let obj = action.payload;
            const uniqueUser =
              data?.filter(item => item?.email === obj?.email).length === 0;
            if (uniqueUser) {
              let obj = [...data, action.payload];
              saveUser(obj);
              message = 'User created successfully';
            } else {
              message = 'User already exists';
            }
          } else {
            let obj = [action.payload];
            saveUser(obj);
            message = 'User created successfully';
          }
          console.log('getAllUser data ===> ', data);
        });
      }
      async function saveUser(item) {
        await AsyncStorage.setItem('allUser', JSON.stringify(item));
      }
      getAllUser();

      return {SignUpSuccess: true, data: action.payload, message};

    case SIGN_UP_FAILED:
      return {SignUpSuccess: false, error: action.payload};

    default:
      return state;
  }
};
