
const fetch = require('node-fetch');

export const getCharacterList = (page = 1) => {
  // eslint-disable-next-line max-len
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=100&page=${page}`)
    .then(res => res.json())
    .then(json => json.results);
};
