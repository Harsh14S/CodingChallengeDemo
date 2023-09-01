import {combineReducers} from 'redux';
import {RESET_ALL_DATA} from '../types';
import SignUpReducer from './SignUpReducer';
import GetTodoDataReducer from './GetTodoDataReducer';
import GetPostsDataReducer from './GetPostsDataReducer';

// import LoginReducer from "./LoginReducer";

const appReducer = combineReducers({
  SignUpReducer: SignUpReducer,
  GetTodoDataReducer: GetTodoDataReducer,
  GetPostsDataReducer: GetPostsDataReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === RESET_ALL_DATA) {
  //   return appReducer(undefined, action);
  // }

  return appReducer(state, action);
};

export default rootReducer;