const products = [
  {
    name: 'Apple 2024 MacBook Pro Laptop with M4 Pro',
    brand: 'Apple',
    description:
      '12-core CPU, 16-core GPU: Built for Apple Intelligence, 14.2-inch Liquid Retina XDR Display, 24GB Unified Memory, 512GB SSD Storage; Space Black',
    price: 1.829,
    img: '../project/images/macbook.webp',
  },
  {
    name: 'JBL Tune 510BT',
    brand: 'JBL',
    description:
      'Bluetooth headphones with up to 40 hours battery, microphone for call, foldable and comfortable, Android and iOs compatible (White)',
    price: 29.95,
    img: '../project/images/headphonejbl.webp',
  },
  {
    name: 'Drone With Camera 1080P for Kids And Adults',
    brand: 'SIMREX',
    description:
      'RC Quadcopter with Altitude Hold, Mini Drone With One Key Start, Waypoint Fly, Headless Mode, 3D Flip, 3 Speeds, Remote Control Drone for Beginners',
    price: 49.99,
    img: '../project/images/drone.webp',
  },
  {
    name: 'JBL Vibe Beam',
    brand: 'JBL',
    description:
      'True Wireless JBL Deep Bass Sound Earbuds, Bluetooth 5.2, Water & Dust Resistant, Hands-free call with VoiceAware, Up to 32 hours of battery life (Black)',
    price: 49.95,
    img: '../project/images/jblvibebeam.webp',
  },
  {
    name: 'Projector with WiFi and Bluetooth',
    brand: 'NISOO',
    description:
      'Upgrade Outdoor Projector, Mini Movie Projector Supports 1080P Synchronize Smartphone Screen by WiFi/USB Cable for Home Entertainment',
    price: 59.99,
    img: '../project/images/projectorwifi.webp',
  },
  {
    name: 'Lenovo IdeaPad 3i Chromebook',
    brand: 'Lenovo',
    description:
      '15.6” FHD Display, Intel Celeron N4500, 8GB RAM, 64GB eMMC, 1920x1080 px, 720p Camera, Chrome OS, Abyss Blue',
    price: 186,
    img: '../project/images/lenovo.webp',
  },
  {
    name: 'Amazon Fire HD 8 Plus tablet',
    brand: 'Amazon',
    description:
      '8” HD Display, 32 GB, 30% faster processor, 3GB RAM, wireless charging, (2022 release), Gray',
    price: 64.99,
    img: '../project/images/amazonfirehd.webp',
  },
  {
    name: 'LISEN Retractable Car Charger',
    brand: 'Lisen',
    description:
      '[69W USB C Car Accessories Adapter ] for iPhone 16 USB C Charger Fast Charging, Travel Essentials Gifts for Women Men, Father for Mom iPhone 16 15 14 13',
    price: 16.99,
    img: '../project/images/lisen.webp',
  },
  {
    name: 'Bluetooth Speaker',
    brand: 'BolaButty',
    description:
      'HD Sound, Portable Wireless, IPX5 Waterproof, Up to 20H Playtime, TWS Pairing, BT5.3, for Home/Party/Outdoor/Beach, Electronic Gadgets, Birthday Gift (Black)',
    price: 21.99,
    img: '../project/images/bluetoothspeaker.webp',
  },
  {
    name: 'Nintendo Switch',
    brand: 'Nintendo',
    description: 'OLED Model w/ Neon Red & Neon Blue Joy-Con',
    price: 347.99,
    img: '../project/images/nintendoswitch.webp',
  },
  {
    name: 'Ring Wired Doorbell Pro (newest model)',
    brand: 'Doorbell',
    description:
      'Best-in-class with cutting-edge features (existing doorbell wiring required)',
    price: 229.99,
    img: '../project/images/ringwireddoorbell.webp',
  },
  {
    name: '420W USB C Charger Block',
    brand: 'Aexhend',
    description:
      '10-Port Charging Station GaN Fast Charging Type C & USB A Wall Charger Adapter for MacBook Pro/Air,iPhone,iPad,Dell XPS,Samsung Galaxy(Black)',
    price: 49.99,
    img: '../project/images/420usbcharger.webp',
  },
  {
    name: 'Meta Quest 3 512GB',
    brand: 'Meta',
    description:
      'Ultimate Mixed Reality Experiences — Get Batman: Arkham Shadow and a 3-Month Trial of Meta Quest+ Included',
    price: 499.99,
    img: '../project/images/metaquest.webp',
  },
  {
    name: 'PlayStation®5 console (slim)',
    brand: 'Playstation',
    description: 'PlayStation®5 console (slim)',
    price: 499,
    img: '../project/images/ps5.webp',
  },
  {
    name: 'Xbox Series X',
    brand: 'Xbox',
    description: '1TB Digital Edition',
    price: 434.99,
    img: '../project/images/xbox.webp',
  },
  {
    name: 'Echo Dot (5th Gen, 2022 release)',
    brand: 'Amazon',
    description:
      'International Version with US Power Adaptor | Smart speaker with Alexa | Charcoal',
    price: 49.99,
    img: '../project/images/echodot.webp',
  },
  {
    name: 'TV SAMSUNG 65-Inch',
    brand: 'Samsung',
    description:
      'Class Crystal UHD 4K DU7200 Series HDR Smart TV w/Object Tracking Sound Lite, PurColor, Motion Xcelerator, Mega Contrast, Q-Symphony (UN65DU7200, 2024 Model)',
    price: 399.99,
    img: '../project/images/tvsamsung.webp',
  },
  {
    name: 'Perlegear Mobile TV Stand with Power Outlet',
    brand: 'Perlegear',
    description:
      'Tilt & Swivel Rolling TV Cart for 32 to 65 70 75 inch TVs up to 110 lbs, Height Adjustable Rolling TV Stand with Wheels, Max VESA 600x400mm, PGTVMC17',
    price: 129.99,
    img: '../project/images/perlegear.webp',
  },
  {
    name: 'Apple iPhone 15 Pro Max',
    brand: 'Apple',
    description: '256GB, Blue Titanium - Unlocked (Renewed Premium)',
    price: 850,
    img: '../project/images/iphone.webp',
  },
  {
    name: 'Apple iPad (10th Generation)',
    brand: 'Apple',
    description:
      'with A14 Bionic chip, 10.9-inch Liquid Retina Display, 256GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Silver',
    price: 349,
    img: '../project/images/ipad.webp',
  },
];

const year = document.getElementById('currentyear');
const today = new Date();
const reviewCounter = document.querySelector('#review-counter');

year.innerText = today.getFullYear();

function createProducts(arr) {
  arr.forEach((product) => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let price = document.createElement('p');
    let description = document.createElement('p');
    let img = document.createElement('img');

    card.setAttribute('class', 'card');
    name.textContent = product.name;
    description.textContent = product.description;
    price.innerHTML = `<span>Price:</span> $${product.price}`;
    img.setAttribute('src', product.img);
    img.setAttribute('alt', `${product.name}`);
    img.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(price);
    ['/wdd131/project/products.html', '/project/products.html'].includes(
      location.pathname
    )
      ? card.appendChild(description)
      : '';
    card.appendChild(img);

    document.querySelector('#products-home').appendChild(card);
  });
}

function getRandomElements(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

if (
  ['/wdd131/project/index.html', '/project/index.html'].includes(
    location.pathname
  )
) {
  const randomProducts = getRandomElements(products, 3);
  createProducts(randomProducts);
} else if (
  ['/wdd131/project/products.html', '/project/products.html'].includes(
    location.pathname
  )
) {
  createProducts(products);
}

function addSubmition() {
  let reviewCount = 0;
  if (localStorage) {
    const count = localStorage.getItem('count') || 0;
    reviewCount = Number(count) + 1;
    localStorage.setItem('count', reviewCount);

    reviewCounter.textContent = `(${reviewCount} visits)`;
  }
}

if (
  ['/wdd131/project/review.html', '/project/review.html'].includes(
    location.pathname
  )
) {
  addSubmition();
}
