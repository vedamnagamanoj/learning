'use strict';
// const ingredients = { ing1: 'olives', ing2: 'spinach' };
// const pizzaTimer = setTimeout(
//   ({ ing1: ingredient1, ing2: ingredient2 }) => {
//     console.log(`Here is your Pizza with ${ingredient1} and ${ingredient2}`);
//   },
//   3000,
//   ingredients
// );

// if (Object.values(ingredients).includes('spinach')) clearTimeout(pizzaTimer);

// setInterval(() => {
//   const day = new Date();

//   const hrs = `${day.getHours()}`.padStart(2, 0);
//   const min = `${day.getMinutes()}`.padStart(2, 0);
//   const sec = `${day.getSeconds()}`.padStart(2, 0);

//   console.log(`${hrs}:${min}:${sec}`);
// }, 1000);

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// console.log(document.querySelectorAll('.section'));
// console.log(document.getElementById('section--1'));
// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByClassName('btn'));

// creating and inserting elements

// .insertAdjacentHTML()
// const header = document.querySelector('.header');
// const cookieMessage = document.createElement('div');
// cookieMessage.classList.add('cookie-message');
// // cookieMessage.textContent = `We use cookie for improved functionality and analytics`;
// cookieMessage.innerHTML = `We use cookie for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>`;

// // header.prepend(cookieMessage);
// // header.append(cookieMessage);

// // header.append(cookieMessage.cloneNode(true));

// // header.before(cookieMessage);
// header.after(cookieMessage);

// // Delete element

// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   // cookieMessage.remove();
//   cookieMessage.parentElement.removeChild(cookieMessage);
// });

// // Styles
// cookieMessage.style.backgroundColor = `37383d`;
// cookieMessage.style.width = `120%`;

// console.log(cookieMessage.style.setProperty('background-color', 'blue'));
// console.log(cookieMessage.style.width);

// console.log(getComputedStyle(cookieMessage).height);

// cookieMessage.style.height =
//   Number.parseFloat(getComputedStyle(cookieMessage).height) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// logo.setAttribute('alt', `Beautiul minimalistic logo`);
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.width);
// console.log(logo.id);
// console.log(logo.className);

// // Non -standard attributes
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// const link = document.querySelector('.twitter-link');
// console.log(link.getAttribute('href'));

// const openAccBtn = document.querySelector('.nav__link--btn');
// console.log(openAccBtn.href);
// console.log(openAccBtn.getAttribute('href'));

// // Data attributes - attributes should start with data in the name

// console.log(logo.dataset.versionNumber);
// console.log(logo.getAttribute('data-version-number'));

// // Classes
// logo.classList.add('c');
// logo.classList.remove('b');
// logo.classList.toggle('a');
// logo.classList.contains('d');

// const alertH1 = evnt => {
//   console.log(evnt);
//   setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);
// };

// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);

document
  .querySelector('a')
  .addEventListener('click', () => console.log(`clicked on <a> element`));

document
  .querySelector('section')
  .addEventListener('click', () => console.log(`clicked on <section> element`));

document
  .querySelector('body')
  .addEventListener('click', () => console.log('clicked on <body> element'));

document
  .querySelector('html')
  .addEventListener('click', () => console.log(`clicked on <html> elememt`));

document
  .querySelector('p')
  .addEventListener('click', () => console.log(`clicked on <p> elememt`));

document.documentElement.addEventListener('click', () =>
  console.log(`clicked on <document> elememt`)
);
