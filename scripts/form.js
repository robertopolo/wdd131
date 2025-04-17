const products = [
  {
    id: 'fc-1888',
    name: 'flux capacitor',
    averagerating: 4.5,
  },
  {
    id: 'fc-2050',
    name: 'power laces',
    averagerating: 4.7,
  },
  {
    id: 'fs-1987',
    name: 'time circuits',
    averagerating: 3.5,
  },
  {
    id: 'ac-2000',
    name: 'low voltage reactor',
    averagerating: 3.9,
  },
  {
    id: 'jj-1969',
    name: 'warp equalizer',
    averagerating: 5.0,
  },
];

const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastModified');

const today = new Date();
const lastModifiedDate = document.lastModified;

year.innerText = today.getFullYear();
lastModified.innerText = `Last modification: ${lastModifiedDate}`;

const productsList = document.querySelector('#products');

function addOptions() {
  products.forEach((product) => {
    const option = document.createElement('option');

    option.textContent = `${product.name
      .charAt(0)
      .toUpperCase()}${product.name.slice(1)}`;
    option.value = product.id;

    productsList.appendChild(option);
  });
}

function addSubmition() {
  if (localStorage) {
    const count = localStorage.getItem('count') || 0;
    localStorage.setItem('count', Number(count) + 1);
  }
}

if (location.pathname == '/review.html') {
  addSubmition();
} else {
  addOptions();
}
