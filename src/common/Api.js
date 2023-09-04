const todoApi = 'https://jsonplaceholder.typicode.com/todos';
const postsApi = 'https://jsonplaceholder.typicode.com/posts';

module.exports = {
  async getPostsData() {
    return fetch(`${postsApi}`, {
      method: 'GET',
    })
      .then(async res => {
        const data = await res.json();
        return data;
      })
      .catch(e => {
        console.log('getPostsData error ----->', e);
      });
  },
  async getTodoData() {
    return fetch(`${todoApi}`, {
      method: 'GET',
    })
      .then(async res => {
        const data = await res.json();
        return data;
      })
      .catch(e => {
        console.log('getTodoData error ----->', e);
      });
  },
};
