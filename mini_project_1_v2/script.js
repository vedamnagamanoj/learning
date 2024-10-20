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
  // console.log(s1coords);
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
      // console.log(evnt.target);
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

// Sticky navigation

// window.addEventListener('scroll', function (evnt) {
//   // console.log(window.scrollY);
//   if (0 > section1El.getBoundingClientRect().top) navEl.classList.add('sticky');
//   else navEl.classList.remove('sticky');
// });

// const stickyObserverCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const stickyObserverOptions = {
//   root: document.querySelector('header'), // for view port
//   threshold: 0,
// };
// const stickyObserver = new IntersectionObserver(
//   stickyObserverCallback,
//   stickyObserverOptions
// );

// stickyObserver.observe(header);

// Using Intersection Observer API

const headerEl = document.querySelector('.header');
const stickyNav = entries => {
  const [entry] = entries; // since only one threshold
  // console.log(entry);
  if (!entry.isIntersecting) navEl.classList.add('sticky');
  else navEl.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navEl.getBoundingClientRect().height}px`,
});
headerObserver.observe(headerEl);

// Reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  sectionObserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// Lazy Loading images

const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );

  imgObserver.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));
/////////////////////////////////////////////////////////////////

// Implementing Sliders

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsEl = document.querySelector('.dots');

let currentSlide = 0;

const goToSlide = function (currentSlide) {
  // console.log(currentSlide);
  slides.forEach(
    (slide, idx) =>
      (slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`)
  );
};

const nextSlide = function () {
  if (currentSlide === slides.length - 1) currentSlide = 0;
  else currentSlide++;

  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) currentSlide = slides.length - 1;
  else currentSlide--;

  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const createDots = function () {
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.classList.add('dots__dot');
    dot.setAttribute('data-slide', `${idx}`);
    dotsEl.insertAdjacentElement('beforeend', dot);
  });
};
const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
// Resetting the slides when the page loads
goToSlide(currentSlide);
createDots();
activateDot(currentSlide);

// Handling events for btns
btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', evnt => {
  // if (evnt.key === 'ArrowRight') nextSlide();
  evnt.key === 'ArrowRight' && nextSlide();
  evnt.key === 'ArrowLeft' && prevSlide();
  // if (evnt.key === 'ArrowLeft') prevSlide();
});

dotsEl.addEventListener('click', function (evnt) {
  if (evnt.target.classList.contains('dots__dot')) {
    const { slide } = evnt.target.dataset;

    currentSlide = +slide;
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }
});

// Test Area

// console.log(true !== false);

document.addEventListener('DOMContentLoaded', evnt => console.log(evnt));
