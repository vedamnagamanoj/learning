'use strict';

// //
// const h1 = document.querySelector('h1');

// // Going Downwards

// console.log(document.querySelectorAll('.highlight'));
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstChild);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';

// h1.closest('.header').style.background = `var(--gradient-secondary)`;

// [...h1.parentElement.children].forEach(child => {
//   if (child !== h1) child.style.transform = `scale(0.5)`;
// });

// document.querySelectorAll('.nav__link').forEach(link =>
//   link.addEventListener('click', function (evnt) {
//     // const self = document.querySelector('.nav__link');
//     console.log('Link');
//     console.log(this);
//     this.style.backgroundColor = randomColor();
//     evnt.stopPropagation();
//   })
// );

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (evnt) {
//     console.log('Links');
//     this.style.backgroundColor = randomColor();

//     // stop event propagation
//   });

// document.querySelector('.nav').addEventListener('click', evnt => {
//   console.log('Nav');
//   console.log(evnt.target);
//   console.log(evnt.currentTarget);
//   evnt.currentTarget.style.backgroundColor = randomColor();
// });

// document
//   .querySelector('.nav__logo')
//   .addEventListener('click', () => console.log(self));

// const arrfn = () => console.log(this);
// arrfn();

// const nrfn = function () {
//   console.log(this);
// };
// nrfn();

// function deffn() {
//   console.log(this);
// }
// deffn();

// const obj = {
//   naam: 'Tiger',
//   kaam: 'Sleeping',

//   deffn() {
//     console.log(`${this.naam} is ${this.kaam}, ${this}`);
//   },

//   nrfn: function () {
//     console.log(`${this.naam} is ${this.kaam}, ${this}`);
//   },

//   arrfn: () => console.log(`${this.naam} is ${this.kaam}, ${this}`),
// };

// obj.deffn();
// obj.nrfn();
// obj.arrfn.call(obj);
