$(document).ready(function() {
  console.log('Hi from the console! 👋💻👾');

  console.log($);
  console.log(document);
  console.log(window);
  console.log(navigator);

  // ----------- HOW TO SELECT ELEMENTS
  // with vanilla js
  // const header = document.getElementById('header');
  // const headerTitle = document.querySelector('.header-title');
  // const headerEmojis = document.querySelector('.header-emojis');
  // const mainInput = document.getElementById('main-input');
  // const mainOutput = document.getElementById('main-output');
  // const mainButton = document.getElementById('main-button');
  // const errorMsg = document.getElementById('main-error-msg');

  // with jquery
  const header = $('.header');
  const headerTitle = $('.header-title');
  const headerEmojis = $('.header-emojis');
  const mainInput = $('#main-input');
  const mainOutput = $('#main-output');
  const mainButton = $('#main-button');
  const errorMsg = $('#main-error-msg');

  // ----------- HOW TO CHANGE CONTENT
  // with vanilla js
  // headerTitle.innerHTML = 'Hi from the console!';
  // headerEmojis.innerHTML = '👾🤖👽';

  // with jquery
  headerTitle.text('Hi from the console!');
  headerEmojis.text('👾🤖👽');

  // ----------- HOW TO CHANGE STYLES
  // with vanilla js
  // header.style.background = 'yellow';
  // header.style.color = 'black';

  // with jquery
  header.css('background', 'yellow');
  header.css('color', 'black');

  // ----------- HOW TO CHANGE ATTRIBUTES
  // with vanilla js
  // mainInput.placeholder = 'Type something!';
  // mainInput.setAttribute('type', 'password');

  // with jquery
  mainInput.attr('placeholder', 'Type something!');
  mainInput.attr('type', 'password');

  // ----------- HOW TO HANDLE EVENTS ON THE DOM
  // declaring the callback function to handle a click
  const handleClick = function(event) {
    console.log(event);
    event.preventDefault();

    console.log('click');

    // const inputValue = mainInput.value; // with vanilla js
    const inputValue = mainInput.val(); // with jquery

    if (!inputValue) {
      // errorMsg.innerHTML = 'Error: Dont forget your input value!'; // with vanilla js
      errorMsg.text('Error: Dont forget your input value!'); // with jquery
      return;
    }

    // with vanilla js
    // errorMsg.innerHTML = '';
    // mainOutput.innerHTML = mainInput.value;

    // with jquery
    errorMsg.text('');
    mainOutput.text(inputValue);
  };

  // declaring the callback function to handle an input
  const handleInput = function(event) {
    console.log(event); // full event object
    console.log(event.target); // the element that triggered the event
    console.log(event.target.value); // the property value of that element

    // with vanilla js
    // errorMsg.innerHTML = '';
    // mainOutput.innerHTML = event.target.value;

    // with jquery
    errorMsg.text('');
    mainOutput.text(event.target.value);
  };

  // adding the event handlers to its own element
  // with vanilla js
  // mainButton.addEventListener('click', handleClick);
  // mainInput.addEventListener('input', handleInput);

  // with jquery
  mainButton.click(handleClick);
  mainInput.keyup(handleInput);

  $(window).resize(function() {
    console.log('Resizing!');
  });
});
