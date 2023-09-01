import {GET_TODO_DATA_REQUEST} from '../types';
export const GetTodoDataAction = () => {
  console.log('GetTodoDataAction ----');
  return {
    type: GET_TODO_DATA_REQUEST,
  };
};
