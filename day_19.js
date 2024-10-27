// 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// function renderCountry(country, className = '') {
//   const html = `<article class="country ${className}">
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

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// }

// function renderError(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// }

// function getJSON(url, errMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errMsg}, ${response.status}`);
//     return response.json();
//   });
// }

// function getCountryData(country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, `Cannot get Country`)
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       // const neighbour = 'dfsd';
//       // const neighbourURL = `https://restcountries.com/v2/alpha/${neighbour}`;

//       if (!neighbour) throw new Error(`No neighbour found`);

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         `Cannot get neighbour Country`
//       );
//       // return 23;
//     })
//     // .then(data => alert(data));
//     .then(data => {
//       console.log(data);
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.log(err + ` 🔥🔥🔥`);
//       renderError(`Something went wrong 🔥🔥🔥 ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       console.log(`loading in finally block`);
//       countriesContainer.style.opacity = 1;
//     });
// }
// btn.addEventListener('click', () => getCountryData('australia'));

// function getCountryData(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'dfsd';
//       const neighbourURL = `https://restcountries.com/v2/alpha/${neighbour}`;

//       if (!neighbour) return;
//       return fetch(neighbourURL);
//       // return 23;
//     })
//     // .then(data => alert(data));
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.log(err + ` 🔥🔥🔥`);
//       renderError(`Something went wrong 🔥🔥🔥 ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       console.log(`loading in finally block`);
//       countriesContainer.style.opacity = 1;
//     });
// }

// getCountryData();

/////////////////////////////////////////////////////////////////////////////////

// Test Area

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// // //   // request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

// request.send();

// const request = fetch(URL);

// console.log(request);
// setTimeout(() => {
//   console.log(request);
// }, 5000);

///////////////////////////////////////
// Coding Challenge #1

/* 
              In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
              
              Here are your tasks:
              
              PART 1
              1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
              2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
              The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
              3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
              4. Chain a .catch method to the end of the promise chain and log errors to the console
              5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
              
              PART 2
              6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
              7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
              
              TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
              TEST COORDINATES 2: 19.037, 72.873
              TEST COORDINATES 2: -33.933, 18.474
              
              GOOD LUCK 😀
              */

// whereAmI(20.593684, 78.96288); // India
// whereAmI(37.09024, -95.712891); // America
// whereAmI(61.52401, 105.318756); // Australia
// whereAmI(-40.900557, 174.885971); // New Zealand

// function whereAmI(lat, lng) {
//   const apiKey = '990770024429354880641x98406';
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with Geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       // console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       // getCountryData(data.country.toLowerCase());
//       return data.country.toLowerCase();
//     })
//     .then(country => fetch(`https://restcountries.com/v2/name/${country}`))
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found ${response.message}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(`${err.message} `))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
