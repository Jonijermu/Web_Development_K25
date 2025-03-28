'use strict'

async function getUserData() {
  try {
    const url = 'https://reqres.in/api/unknown/23';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error ${response.status} occurred!`);
    }
    const user = await response.json();
    console.log(user)
  } catch (error) {
    console.log('An error occurred:', error.message);
  }
}

getUserData();
