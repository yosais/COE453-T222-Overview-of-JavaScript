/*
The node-fetch latest version doesn't use the require() syntax to import the package. You need to go to your package.json and type:   "type": "module"

Please have a look at the file package.json.

You need to install node-fetch using the following command:  npm install node-fetch
*/

import fetch from 'node-fetch';

async function getUser() {
  try {
    const response = await fetch('https://reqres.in/api/users/2');
    const json_obj = await response.json();
    console.log(json_obj.data.id);
  } catch (error) {
    console.error(error);
  }
}

getUser();
console.log('Done');
