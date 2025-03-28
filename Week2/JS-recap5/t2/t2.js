'use strict'

async function postUser() {
  try {
    const user = {
      name: 'Joni',
      job: 'Student'
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    };

    const response = await fetch(url, options);
    const jsonData = await response.json();
    if (!response.ok) {
      if (jsonData) {
        throw new Error(`${jsonData.message}, code:${response.status}`);
      }
      throw new Error(`Error ${response.status} occured!`);
    }
    console.log(jsonData);
  } catch (error) {
    console.error(error)
  }
}

postUser()
