'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (evnt) {
  evnt.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Test Area
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
console.log(document.querySelectorAll('.section'));
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('btn'));

// creating and inserting elements

// .insertAdjacentHTML()
const cookieMessage = document.createElement('div');
cookieMessage.classList.add('cookie-message');
// cookieMessage.textContent = `We use cookie for improved functionality and analytics`;
cookieMessage.innerHTML = `We use cookie for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>`;

header.prepend(cookieMessage);
header.append(cookieMessage);

console.log();
