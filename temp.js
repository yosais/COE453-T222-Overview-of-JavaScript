const fetch = require('node-fetch');

const response = await fetch('https://github.com/');
const body = await response.text();

console.log(body);
