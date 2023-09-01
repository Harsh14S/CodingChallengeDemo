import AsyncStorage from '@react-native-async-storage/async-storage';

const todoApi = 'https://jsonplaceholder.typicode.com/todos';
const postsApi = 'https://jsonplaceholder.typicode.com/posts';

module.exports = {
  async getTodoData() {
    // console.log('getTodoData called');
    return fetch(`${todoApi}`, {
      method: 'GET',
    })
      .then(async res => {
        const data = await res.json();
        // console.log('getTodoData ------->', res);
        return data;
      })
      .catch(e => {
        console.log('getTodoData error ----->', e);
      });
  },
  async getPostsData() {
    return fetch(`${postsApi}`, {
      method: 'GET',
    })
      .then(async res => {
        const data = await res.json();
        // console.log('getPostsData ------->', data);
        return data;
      })
      .catch(e => {
        console.log('getPostsData error ----->', e);
      });
  },
};
