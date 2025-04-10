const menu = document.querySelector('nav');
const hamButton = document.querySelector('button');
const homeOptionMenu = document.querySelector('#home');
const oldOptionMenu = document.querySelector('#old');
const newOptionMenu = document.querySelector('#new');
const largeOptionMenu = document.querySelector('#large');
const smallOptionMenu = document.querySelector('#small');

const lastModified = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
const today = new Date();
const year = document.getElementById('currentyear');

const temples = [
  {
    templeName: 'Aba Nigeria',
    location: 'Aba, Nigeria',
    dedicated: '2005, August, 7',
    area: 11500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg',
  },
  {
    templeName: 'Manti Utah',
    location: 'Manti, Utah, United States',
    dedicated: '1888, May, 21',
    area: 74792,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg',
  },
  {
    templeName: 'Payson Utah',
    location: 'Payson, Utah, United States',
    dedicated: '2015, June, 7',
    area: 96630,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg',
  },
  {
    templeName: 'Yigo Guam',
    location: 'Yigo, Guam',
    dedicated: '2020, May, 2',
    area: 6861,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg',
  },
  {
    templeName: 'Washington D.C.',
    location: 'Kensington, Maryland, United States',
    dedicated: '1974, November, 19',
    area: 156558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg',
  },
  {
    templeName: 'Lima Perú',
    location: 'Lima, Perú',
    dedicated: '1986, January, 10',
    area: 9600,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg',
  },
  {
    templeName: 'Mexico City Mexico',
    location: 'Mexico City, Mexico',
    dedicated: '1983, December, 2',
    area: 116642,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg',
  },
  {
    templeName: 'Caracas Venezuela',
    location: 'Caracas, Venezuela',
    dedicated: '2000, August, 20',
    area: 15332,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/400x225/caracas_venezuela_temple_detail_1691066_2400x1200.jpg',
  },
  {
    templeName: 'Bogotá Colombia',
    location: 'Bogotá, Colombia',
    dedicated: '1999, April, 24',
    area: 53500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-1029726-wallpaper.jpg',
  },
  {
    templeName: 'San Diego California',
    location: 'San Diego, California, United States',
    dedicated: '1993, April, 25',
    area: 72000,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-mormon-temple-1164678-wallpaper.jpg',
  },
  {
    templeName: 'Calgary Alberta',
    location: 'Calgary, Alberta, Canada',
    dedicated: '2012, Octubre, 28',
    area: 33000,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-before-open-house-1033408-wallpaper.jpg',
  },
  {
    templeName: 'Salt Lake',
    location: 'Salt Lake City, Utah, United States',
    dedicated: '1893, April, 6',
    area: 382207,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg',
  },
  {
    templeName: 'San Salvador El Salvador',
    location: 'San Salvador, El Salvador',
    dedicated: '2011, August, 21',
    area: 27986,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-salvador-el-salvador/400x250/san-salvador-el-salvador-temple-lds-848547-wallpaper.jpg',
  },
  {
    templeName: 'Barranquilla Colombia',
    location: 'Barranquilla, Colombia',
    dedicated: '2018, December, 9',
    area: 25349,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/3-Barranquilla-Columblia-Temple-2135198.jpg',
  },
  {
    templeName: 'Rome Italy',
    location: 'Rome, Italy',
    dedicated: '2019, March, 10',
    area: 41010,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg',
  },
  {
    templeName: 'Laie Hawaii',
    location: 'Laie, Hawaii, United States',
    dedicated: '1919, November, 27',
    area: 42100,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775370-wallpaper.jpg',
  },
  {
    templeName: 'Idaho Falls Idaho',
    location: 'Idaho Falls, Idaho, United States',
    dedicated: '1945, September, 23',
    area: 85624,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/7-Idaho-Falls-Temple-1375367.jpg',
  },
  {
    templeName: 'Manaus Brazil',
    location: 'Manaus, Brazil',
    dedicated: '2012, June, 10',
    area: 32032,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/400x250/lds-temple-manaus-brazil-1085299-wallpaper.jpg',
  },
  {
    templeName: 'Quito Ecuador',
    location: 'Quito, Ecuador',
    dedicated: '2022, November, 20',
    area: 36780,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quito-ecuador/400x250/quito_ecuador_temple2.jpg',
  },
  {
    templeName: 'Rio de Janeiro Brazil',
    location: 'Rio de Janeiro, Brazil',
    dedicated: '2022, May, 8',
    area: 29966,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/6-743652dbbf1ab19966da7eb3c7570d08cfc3ab8b.jpeg',
  },
  {
    templeName: 'San Juan Puerto Rico',
    location: 'San Juan, Puerto Rico',
    dedicated: '2023, January, 15',
    area: 6988,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/400x250/san_juan_puerto_rico_temple_exterior.jpeg',
  },
  {
    templeName: 'Santo Domingo Dominican Republic',
    location: 'Santo Domingo, Dominican Republic',
    dedicated: '2000, September, 17',
    area: 67000,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santo-domingo-dominican-republic/400x250/santo-domingo-dominican-republic-temple-lds-761308-wallpaper.jpg',
  },
  {
    templeName: 'Seoul Korea',
    location: 'Seoul, Korea',
    dedicated: '1985, December, 14',
    area: 28057,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x250/seoul-korea-temple-lds-424784-wallpaper.jpg',
  },
  {
    templeName: 'Toronto Ontario',
    location: 'Toronto, Ontario, Canada',
    dedicated: '1990, August, 25',
    area: 55558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-235671-wallpaper.jpg',
  },
];

hamButton.addEventListener('click', function () {
  hamButton.classList.toggle('opened');
  menu.classList.toggle('opened');
});

year.innerText = today.getFullYear();
lastModified.innerText = `Last modification: ${lastModifiedDate}`;

function createTemplateCard(temple) {
  let card = document.createElement('section');
  let name = document.createElement('h3');
  let location = document.createElement('p');
  let dedication = document.createElement('p');
  let area = document.createElement('p');
  let img = document.createElement('img');

  card.setAttribute('class', 'card');
  name.textContent = temple.templeName;
  location.innerHTML = `<span>Location:</span> ${temple.location}`;
  dedication.innerHTML = `<span>Dedication:</span> ${temple.dedicated}`;
  area.innerHTML = `<span>Size:</span> ${temple.area} sq ft`;
  img.setAttribute('src', temple.imageUrl);
  img.setAttribute('alt', `${temple.templeName} Temple`);
  img.setAttribute('loading', 'lazy');

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(img);

  document.querySelector('.cards-container').appendChild(card);
}

temples.sort((a, b) => a.templeName.localeCompare(b.templeName));

temples.forEach((temple) => {
  createTemplateCard(temple);
});

homeOptionMenu.addEventListener('click', () => {
  document.querySelector('.cards-container').innerHTML = '';

  temples.forEach((temple) => {
    createTemplateCard(temple);
  });
});

oldOptionMenu.addEventListener('click', () => {
  let templeFiltered = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() < 1900
  );

  document.querySelector('.cards-container').innerHTML = '';

  templeFiltered.forEach((temple) => {
    createTemplateCard(temple);
  });
});

newOptionMenu.addEventListener('click', () => {
  let templeFiltered = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() > 2000
  );

  document.querySelector('.cards-container').innerHTML = '';

  templeFiltered.forEach((temple) => {
    createTemplateCard(temple);
  });
});

largeOptionMenu.addEventListener('click', () => {
  let templeFiltered = temples.filter((temple) => temple.area > 90000);

  document.querySelector('.cards-container').innerHTML = '';

  templeFiltered.forEach((temple) => {
    createTemplateCard(temple);
  });
});

smallOptionMenu.addEventListener('click', () => {
  let templeFiltered = temples.filter((temple) => temple.area < 10000);

  document.querySelector('.cards-container').innerHTML = '';

  templeFiltered.forEach((temple) => {
    createTemplateCard(temple);
  });
});
