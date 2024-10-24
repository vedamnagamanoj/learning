'use strict';

// const h1 = document.querySelector('h1');

// setTimeout(() => {
//   h1.style.color = 'pink    ';
// }, 5000);

// h1.textContent = `This is a heading with a link`;

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// console.log(btn, countriesContainer);

// function getCountryData(country) {
//   const request = new XMLHttpRequest();
//   let countries;
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   // request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();
//   request.addEventListener('load', function () {
//     const [country] = JSON.parse(this.responseText);

//     const html = `<article class="country">
//           <img class="country__img" src="${country.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${country.name}</h3>
//             <h4 class="country__region">${country.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               country.population / 1000000
//             ).toFixed(2)} Million</p>
//             <p class="country__row"><span>🗣️</span>${
//               country.languages[0].name
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               country.currencies[0].code
//             }</p>
//           </div>
//         </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }

function getCountryAndNeighbour(country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  let countries;
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  // request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  request.send();
  request.addEventListener('load', function () {
    const [country] = JSON.parse(this.responseText);
    console.log(country);

    // Render requested country
    renderCountry(country);

    // Get neighbour country
    const neighbour = country.borders?.[0];

    // AJAX call 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const country2 = JSON.parse(this.responseText);
      console.log(country2);

      renderCountry(country2, 'neighbour');
    });
  });
}

function renderCountry(country, className = '') {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${country.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${country.name}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span>${(
              country.population / 1000000
            ).toFixed(2)} Million</p>
            <p class="country__row"><span>🗣️</span>${
              country.languages[0].name
            }</p>
            <p class="country__row"><span>💰</span>${
              country.currencies[0].code
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

// console.log(getCountryData('china'));

btn.addEventListener('click', function () {
  // getCountryData('india');
  // getCountryData('usa');
  // getCountryData('china');
  getCountryAndNeighbour('usa');
});

setTimeout(() => {
  console.log(`firstCall`);
  setTimeout(() => {
    console.log(`secondCall`);
    setTimeout(() => {
      console.log(`thirdCall`);
      setTimeout(() => {
        console.log(`fourthCall`);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
