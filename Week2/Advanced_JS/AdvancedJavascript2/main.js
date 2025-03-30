import {restaurantModal, restaurantRow} from './components.js';
import {fetchData} from "./utils.js";
import {baseUrl} from "./variables.js";

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
let restaurants = [];
const table = document.querySelector('table');
const modal = document.querySelector('dialog');


const getRestaurants = async () => {
  try {
    restaurants = await fetchData(baseUrl + '/restaurants');
  } catch (error) {
    console.error(error);
  }
}

const getDailyMenu = async (id, lang) => {
  try {
    return await fetchData(`${apiUrl}/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error);
  }
}

const sortRestaurants = () => {
  restaurants.sort((a, b) =>
    a.name.toUpperCase() < b.name.toUpperCase() ? -1 :
      a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0
  );
}

const filterRestaurants = (restaurants) => {
  return restaurants.filter(sodexo => sodexo.company === 'Sodexo')
}


const createTableCells = () => {
  const sodexoRestaurants = filterRestaurants(restaurants);
  sodexoRestaurants.forEach(restaurant => {
    const row = restaurantRow(restaurant)
    table.append(row);
    row.addEventListener('click', async function () {
      try {
        for (const elem of document.querySelectorAll('.highlight')) {
          elem.classList.remove('highlight');
        }
        row.classList.add('highlight');

        const coursesResponse = await getDailyMenu(restaurant._id, 'fi');
        modal.innerHTML = restaurantModal(restaurant, coursesResponse)
        modal.showModal();
      } catch (error) {
        console.log(error);
      }
    });
  });
}

const main = async () => {
  try {
    await getRestaurants();
    sortRestaurants();
    createTableCells();
  } catch (error) {
    console.error(error);
  }
}

main();


