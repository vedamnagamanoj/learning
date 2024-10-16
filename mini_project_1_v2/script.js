'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1El = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const navEl = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (evnt) {
  evnt.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

function handleHover(evnt) {
  const selectedLink = evnt.target;

  if (selectedLink.classList.contains('nav__link')) {
    const siblings = selectedLink
      .closest('.nav')
      .querySelectorAll('.nav__link');
    const logo = selectedLink.closest('.nav').querySelector('.nav__logo');

    siblings.forEach(sibling => {
      if (sibling !== selectedLink) {
        sibling.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}

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

btnScrollTo.addEventListener('click', evnt => {
  const s1coords = section1El.getBoundingClientRect();
  console.log(s1coords);
  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.screenX,
  //   s1coords.top + window.scrollY
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.screenX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1El.scrollIntoView({ behavior: 'smooth' });
});

// const tabsEl = document.querySelector('.operations__tab-container');
// tabsContainer.addEventListener('click', function (evnt) {
//   if (evnt.target.classList.contains('operations__tab'))
//     console.log(evnt.target.textContent);
// });

// tabs.forEach(tab => tab.addEventListener('click', () => console.log(`TAb`)));
tabsContainer.addEventListener('click', function (evnt) {
  const clickedEl = evnt.target.closest('.operations__tab');

  // console.log(clickedEl);

  // Guard Clause
  if (!clickedEl) return;

  // Removing the active tab and content for all the tabs
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(tabContent =>
    tabContent.classList.remove('operations__content--active')
  );

  // Activate selected tab
  clickedEl.classList.add('operations__tab--active');

  // Activating content area

  // document
  //   .querySelector(`.operations__content--${clickedEl.dataset.tab}`)
  //   .classList.add(`operations__content--active`);
  document
    .querySelector(
      `.operations__content--${clickedEl.getAttribute('data-tab')}`
    )
    .classList.add(`operations__content--active`);
});

/////////////////////////////////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el, idx) {
//   el.addEventListener('click', function (evnt) {
//     evnt.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document
//       .querySelector(id)
//       // .querySelector(`#section--${idx + 1}`)
//       .scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event Delegation

// add evnt listener to common parent element.
// determine what element originated the event.

document
  .querySelector('.nav__links')
  .addEventListener('click', function (evnt) {
    evnt.preventDefault();
    // matching strategy
    if (
      evnt.target.classList.contains('nav__link') &&
      !evnt.target.classList.contains('nav__link--btn')
    ) {
      console.log(evnt.target);
      const id = evnt.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

// navEl.addEventListener('mouseover', evnt => handleHover(evnt, 0.5));
// navEl.addEventListener('mouseout', evnt => handleHover(evnt, 1));

// Passing argumets to handler functions
navEl.addEventListener('mouseover', handleHover.bind(0.5));
navEl.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////////////////////////////////////////////

// Test Area

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
