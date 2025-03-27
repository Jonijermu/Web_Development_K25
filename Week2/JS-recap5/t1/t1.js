'use strict'

async function getUserData() {
  const url = 'https://reqres.in/api/users/1';
  const options = {
    method: 'GET', headers: {
      'Content-Type': 'application/json',
    }
  };
  try {
    const response = await fetch(url, options);
    const user = await response.json();
    console.log(user)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getUserData();
