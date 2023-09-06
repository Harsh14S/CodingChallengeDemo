const URL = 'https://jsonplaceholder.typicode.com/';
const INSTA = `https://graph.instagram.com/`;

module.exports = {
  async getPostsData() {
    return fetch(`${URL}todos`, {
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
    return fetch(`${URL}posts`, {
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
  async getInstaUsername(access_token) {
    return fetch(`${INSTA}me?fields=id,username&access_token=${access_token}`, {
      method: 'GET',
    })
      .then(async res => {
        const data = await res.json();
        console.log('getInstaUsername ----> ', data);
        return data;
      })
      .catch(e => {
        console.log('getInstaUsername error ----->', e);
      });
  },
};
