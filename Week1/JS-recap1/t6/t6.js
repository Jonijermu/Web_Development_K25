'use strict';

function multiplicationTable() {
  const number = Number(prompt('Enter a positive number: '));
  let table = document.createElement('table');
  for (let i = 1; i <= number; i++) {
    let tr = document.createElement('tr');
    for (let j = 1; j <= number; j++) {
      let td = document.createElement('td');
      td.textContent = i * j;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  document.body.appendChild(table);
}

multiplicationTable();
