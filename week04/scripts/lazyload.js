const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastModified');

const today = new Date();
const lastModifiedDate = document.lastModified;

year.innerText = today.getFullYear();
lastModified.innerText = `Last modification: ${lastModifiedDate}`;