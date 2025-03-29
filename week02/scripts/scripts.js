const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

const output = document.getElementsByTagName('ul');
const options = {weekday: 'long'};
const today = new Date();

let todayString = new Intl.DateTimeFormat('en-US', options).format(today);
document.getElementById('today').innerHTML = `Today is ${todayString}.`;

for (let i = 1; i<= DAYS; i++) {
    let nextDay = new Date();
    nextDay.setDate(today.getDate() + i);
    let nextDayString = new Intl.DateTimeFormat('en-US', options).format(nextDay);
    item = document.createElement('li');
    item.textContent = nextDayString;
    output[0].appendChild(item);
}

console.log('For loop');
for (let i = 0; i < studentReport.length; i++) {
  if ((x = studentReport[i] < LIMIT)) {
    console.log((x = studentReport[i]));
  }
}

let i = 0;
console.log('While loop');
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}

i = 0;
console.log('For each loop');
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

console.log('For ... in loop');
for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}
