const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContext = radius;
areaOutput.textContext = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.innerHTML = radius;
areaOutput.innerHTML = area;