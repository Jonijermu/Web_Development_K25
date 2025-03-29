const restaurantRow  = (restaurant) => {
  const tr = document.createElement('tr');
  const {name, company, city} = restaurant;

  tr.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
    <td>${city}</td>
  `;
  return tr;
}

const restaurantModal = (restaurant, menu)  => {
  const {name, address, postalCode, phone, company} = restaurant;
  const {courses} = menu;
  let menuHtml = ''
  courses.forEach(course => {
    menuHtml += `
    <article class="course">
      <p><strong>${course.name}</strong>,
        Hinta: ${course.price},
        Allergeenit: ${course.diets}</p>
    </article>
    `;
  });
  return `
    <h2>${name}</h2>
    <p>Address: ${address}</p>
    <p>Postal Code: ${postalCode}</p>
    <p>Phone: ${phone}</p>
    <p>Company: ${company}</p>
    <h3>Menu</h3>
    ${menuHtml}
  `;
}

export {restaurantModal, restaurantRow};
