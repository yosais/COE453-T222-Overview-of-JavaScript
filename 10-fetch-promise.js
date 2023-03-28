import fetch from 'node-fetch';

// Get
fetch('https://reqres.in/api/users/2')
  .then((res) => res.json())
  .then((json_obj) => console.log(json_obj.data.first_name))
  .catch((err) => console.error(error));

// Post
const data = {
  name: 'Ahmad',
};

const customHeaders = {
  'Content-Type': 'application/json',
};

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: customHeaders,
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((json_obj) => console.log(json_obj))
  .catch((err) => console.error(error));
