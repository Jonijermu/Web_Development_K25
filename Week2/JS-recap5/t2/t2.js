'use strict'


async function postUserData() {
  const user = {
    id: 200, name: 'Joni', job: 'Student'
  };
  const url = 'https://reqres.in/api/users';
  const options = {
    method: 'POST', headers: {
      'Content-Type': 'application/json',
    }, body: JSON.stringify(user)
  };
  try {
    const userData = await fetch(url, options);
    console.log(userData)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

postUserData()
