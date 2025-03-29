const year = document.getElementById('currentyear');
const lastModified = document.getElementById('lastModified');
const hamButton = document.querySelector('button');
const menu = document.querySelector('nav');

const today = new Date();
const lastModifiedDate = document.lastModified;

hamButton.addEventListener('click', function() {
    hamButton.classList.toggle('opened');
    menu.classList.toggle('opened');
})

year.innerText = today.getFullYear();
lastModified.innerText = `Last modification: ${lastModifiedDate}`;