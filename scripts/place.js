const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastModified');
const temperature = parseFloat(
  document.querySelector('#temperature').textContent
);
const windSpeed = parseFloat(document.querySelector('#windSpeed').textContent);
const windChill = document.querySelector('#windChill');

const today = new Date();
const lastModifiedDate = document.lastModified;

year.innerText = today.getFullYear();
lastModified.innerText = `Last modification: ${lastModifiedDate}`;

function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(2);
}

if (temperature <= 10 && windSpeed > 4.8) {
  windChill.innerText = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChill.textContent = 'N/A';
}
