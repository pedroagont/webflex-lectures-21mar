console.log('Hi from the console! 👋💻👾');

console.log(document);

const header = document.getElementById('header');
const headerTitle = document.querySelector('.header-title');
const headerEmojis = document.querySelector('.header-emojis');

// change content
headerTitle.innerHTML = 'Hi from the console!';
headerEmojis.innerHTML = '👾🤖👽';

// change styles
header.style.background = 'yellow';
header.style.color = 'black';
