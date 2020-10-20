
// https://fakerapi.it/api/v1/users?_quantity=100

export const getPeople = () => {
  return fetch('https://fakerapi.it/api/v1/users?_quantity=1000')
    .then(res => res.json())
    .then(json => json.data);
};
