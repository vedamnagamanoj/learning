'use strict';

const country = 'portugal';
const URL = `https://restcountries.com/v2/name/${country}`;
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// // //   // request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

// request.send();

const request = fetch(URL);

console.log(request);
// setTimeout(() => {
//   console.log(request);
// }, 5000);

function getCountryData(country) {
  fetch(URL).then();
}
