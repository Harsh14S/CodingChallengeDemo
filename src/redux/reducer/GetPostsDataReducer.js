import {GET_POSTS_DATA_SUCCESS, GET_POSTS_DATA_FAILED} from '../types';
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  // console.log("action data", action)
  switch (action.type) {
    case GET_POSTS_DATA_SUCCESS:
      // console.log('GetPosts reducer: ', {
      //   GetPostsDataSuccess: true,
      //   data: action.payload,
      // });
      return {GetPostsDataSuccess: true, data: action.payload};

    case GET_POSTS_DATA_FAILED:
      return {GetPostsDataSuccess: false, error: action.payload};

    default:
      return state;
  }
};
