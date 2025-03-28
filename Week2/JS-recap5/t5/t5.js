// your code here
const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
let restaurants = [];

async function fetchData(url, options = {}) {
  const response = await fetch(url, options);
  const json = await response.json();
  if (!response.ok) {
    if (json.message) {
      throw new Error(`${json.message}, code:${response.status}`);
    }
    throw new Error(`Error ${response.status} occured!`);
  }
  return json;
}

async function getRestaurants() {
  try {
    restaurants = await fetchData(apiUrl + '/restaurants');
  } catch (error) {
    console.error(error);
  }
}

async function getDailyMenu(id, lang) {
  try {
    return await fetchData(`${apiUrl}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error);
  }
}


function sortRestaurants() {
  restaurants.sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
      return -1;
    }
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
      return 1;
    }
    return 0;
  });
  createTableCells();
}

function createTableCells() {
  const table = document.querySelector('table');
  for (let rest of restaurants) {
    const tr = document.createElement("tr");
    const nameTd = document.createElement("td");
    nameTd.innerText = rest.name;
    const addressTd = document.createElement("td");
    addressTd.innerText = rest.address;
    const cityTd = document.createElement("td");
    cityTd.innerText = rest.address;
    tr.append(nameTd, addressTd, cityTd);
    table.append(tr);
    tr.addEventListener('click', async function () {
      try {
        for (const elem of document.querySelectorAll('.highlight')) {
          elem.classList.remove('highlight');
        }
        tr.classList.add('highlight');

        const coursesResponse = await getDailyMenu(rest._id, 'fi');
        modalElements(rest, coursesResponse.courses);
      }
      catch (error) {
        console.log(error);
      }
    });
  }
}

async function modalElements(rest, courses) {
  const modal = document.querySelector('dialog');
  modal.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.innerText = rest.name;
  const address = document.createElement('p');
  address.innerText = rest.address;
  const postalCode = document.createElement('p');
  postalCode.innerText = rest.postalCode;
  const phoneNumber = document.createElement('p');
  phoneNumber.innerText = rest.phone;
  const company = document.createElement('p');
  company.innerText = rest.company;

  modal.append(h2, address, postalCode, phoneNumber, company);

  for (let course of courses) {
    modal.insertAdjacentHTML('beforeend', `
    <article class="course">
        <p><strong>${course.name}</strong>,
        Hinta: ${course.price},
        Allergeenit: ${course.diets}</p>
    </article>
  `);
  }
  modal.showModal();
}



async function main() {
  try {
    await getRestaurants();
    sortRestaurants();
  } catch (error) {
    console.error(error);
  }
}

main();

























