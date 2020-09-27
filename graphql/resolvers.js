const axios = require('axios');

const apiURL = 'https://api.chucknorris.io/jokes';

export default {
  Query: {
    async categories() {
      try {
        const categories = await axios.get(`${apiURL}/categories`);
        return categories.data.map(category => ({ name: category }));
      } catch(err) {
        console.log(err);
      }
    },

    async random(parent, args) {
      const { category } = args;
      try {
        const joke = await axios.get(`${apiURL}/random?category=${category}`);
        return joke.data;
      } catch(err) {
        console.log(err);
      }
    },
  },
};
