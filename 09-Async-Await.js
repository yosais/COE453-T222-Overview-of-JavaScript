async function getUser() {
  try {
    const response = await fetch('https://reqres.in/api/users/2')
    const json_obj = await response.json()
    console.log(json_obj.data.id)
    
  } catch (error) {
    console.error(error)
  }
}

getUser()
console.log('Done')