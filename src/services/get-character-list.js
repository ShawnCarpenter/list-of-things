
const fetch = require('node-fetch');

export const getCharacterList = () => {
  // eslint-disable-next-line max-len
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${Math.ceil(Math.random() * 23)}`)
    .then(res => res.json())
    .then(json => json.results);
};
