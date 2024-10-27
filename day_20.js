'use strict';

// function returnNothing() {
//   console.log(`this function returns nothing`);
//   return 2;
// }

// console.log(returnNothing());

// setTimeout(() => {
//   console.log(`displays in 10sec`);
// }, 10000);

// setTimeout(() => {
//   console.log(`displays in 5sec`);
// }, 5000);

// setTimeout(() => {
//   console.log(`displays in 1sec`);
// }, 1000);

// setTimeout(() => {
//   console.log(`displays in 10sec`);
// }, 10000);
// for (let i = 0; i < 1000000; i++) console.log(i);

// console.log('Test Start');

// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);

// Promise.resolve('Resolved promise 1').then(response => {
//   for (let i = 0; i < 10000; i++) console.log(response);
// });

// Promise.resolve('Resolved Promise 2').then(response => {
//   for (let i = 100000; i > 0; i--) console.log(response);
// });

// console.log('Test Completed');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You Won 🤑');
//     } else {
//       reject(new Error('You lost 🥲'));
//     }
//   }, 2000);
// });

// console.log(lotteryPromise.then(data => console.log(data)));

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log(`I've waited for two seconds`);
//     return wait(1);
//   })
//   .then(() => console.log(`I've waited for one second`));

// wait(1)
//   .then(() => {
//     console.log(`1 sec passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`2 sec passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`3 sec passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`4 sec passed`);
//   });

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
//   countriesContainer.style.opacity = 1;
// }

// function renderError(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// }

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// // getPosition().then(position => console.log(position));

// function whereAmI() {
//   getPosition()
//     .then(position => {
//       // console.log(position);
//       const { latitude: lat, longitude: lng } = position.coords;
//       const apiKey = '990770024429354880641x98406';
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`
//       );
//     })
//     .then(response => {
//       console.log(response);
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
//     .then(data => renderCountry(data[1]))
//     .catch(err => console.log(`${err.message} `))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const imagesContainer = document.querySelector('.images');

// const wait = function (seconds) {
//   return new Promise(resolve => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// function wait(sec) {
//   return new Promise(resolve => {
//     setTimeout(resolve, sec * 1000);
//   });
// }

// function createImage(imgPath) {
//   return new Promise((resolve, reject) => {
//     const imgEl = document.createElement('img');
//     imgEl.src = imgPath;

//     imgEl.addEventListener('load', () => {
//       imagesContainer.append(imgEl);
//       resolve(imgEl);
//     });

//     imgEl.addEventListener('error', () => {
//       reject(new Error('Image not found'));
//     });
//   });
// }
// let currentImg;

// wait(2)
//   .then(() => createImage('./images/img-1.jpg'))

//   .then(img => {
//     currentImg = img;
//     console.log(`Image is loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//     return createImage('./images/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(`Image is loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./images/img-3.jpg');
//   })

//   .then(img => {
//     currentImg = img;
//     console.log(`Image is loaded`);
//     return wait(2);
//   })
//   .then(() => console.log(`All images are loaded`))
//   .catch(err => console.error(err));

// const imagesContainer = document.querySelector('.images');

// const createImg = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', () => {
//       imagesContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', () => {
//       reject(err => console.error(err));
//     });
//   });
// };

// const wait = function (seconds) {
//   return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// };

// let currentImg;

// wait(2)
//   .then(() => createImg('./images/img-1.jpg'))
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//     return createImg(`./images/img-2.jpg`);
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//     return createImg('./images/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//     console.log('All images are loaded');
//   });

// const whereAmI = async function () {
//   try {
//     const apiKey = '990770024429354880641x98406';

//     const { coords } = await getPosition();
//     const { latitude: lat, longitude: lng } = coords;

//     const countryRes = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${apiKey}`
//     );

//     if (!countryRes.ok) throw new Error(`Problem getting location data`);

//     const { country } = await countryRes.json();

//     const res = await fetch(`https://restcountries.com/v2/name/${country}`);
//     if (!res.ok) throw new Error('Problem getting country');

//     const data = await res.json();
//     // console.log(`2. Executing whereAmI function`);
//     // console.log(data);

//     renderCountry(data[1]);
//     return `You are in ${country}`;
//   } catch (err) {
//     console.error(err.message);
//   }
// };

// console.log('1. will get location');
// console.log(whereAmI()); (Here it returns a pending promise) 2. executing async function
// whereAmI().then(city => console.log(city));
// (async () => {
//   try {
//     const city = await whereAmI();
//     console.log(`2. You are in ${city}`);
//   } catch (err) {
//     console.log(`2. ${err.message}`);
//   } finally {
//     console.log(`3. Finished getting location`);
//   }
// })();
// console.log('3. finished getting location');

// try {
//   let y = 1;
//   const x = 2;

//   x = 3;
// } catch (err) {
//   alert(err.message);
// } finally {
//   console.log(`execution completed`);
// }

// function getJSON(url, errMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errMsg}, ${response.status}`);
//     return response.json();
//   });
// }

// const get3countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));

//     // console.log([data1.capital, data2.capital, data3.capital]);
//   } catch (err) {
//     console.error(err.message + '😿');
//   }
// };

// get3countries('portugal', 'canada', 'tanzania');

// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);

//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => {
//       reject(new Error(`request took too long`));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/tanzania`),
//   timeout(1),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// Promise.allSettled([
//   Promise.resolve('success - 1'),
//   Promise.resolve('success -2'),
//   Promise.reject('error -1'),
//   Promise.resolve('success -3'),
// ]).then(data => console.log(data));

// Promise.any [ES2021]

// Promise.any([
//   Promise.resolve('success - 1'),
//   Promise.resolve('success -2'),
//   Promise.reject('error -1'),
//   Promise.resolve('success -3'),
// ]).then(data => console.log(data));

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const createImg = function (imgPath) {
  return new Promise((resolve, reject) => {
    const imgEl = document.createElement('img');
    imgEl.src = imgPath;
    imgEl.addEventListener('load', () => {
      imgContainer.append(imgEl);
      resolve(imgEl);

      imgEl.addEventListener('error', () => {
        reject(new Error('Image not found'));
      });
    });
  });
};

const wait = function (sec) {
  return new Promise(response => {
    setTimeout(() => {
      response();
    }, sec * 1000);
  });
};

const imgContainer = document.querySelector('.images');
const loadNPause = async function () {
  try {
    await wait(2);
    const img1 = await createImg('./images/img-1.jpg');
    await wait(2);
    img1.style.display = `none`;
    const img2 = await createImg('./images/img-2.jpg');
    await wait(2);
    img2.style.display = `none`;
    const img3 = await createImg('./images/img-3.jpg');
    await wait(2);
    img3.style.display = `none`;
    console.log(`displayed all images`);
  } catch (err) {
    console.error(err.message);
  }
};

// loadNPause();

const imgArr = [
  './images/img-1.jpg',
  './images/img-2.jpg',
  './images/img-3.jpg',
];

const loadAll = async function (imgArr) {
  // const imgs = imgArr.map(img => createImg(img));
  // console.log(imgs);

  const imgs = imgArr.map(async img => await createImg(img));
  console.log(imgs);

  const imgEl = await Promise.all(imgs);
  console.log(imgEl);

  imgEl.forEach(img => img.classList.add('parallel'));

  // const [img1, img2, img3] = imgArr;
  // // console.log(img1, img2, img3);
  // const imgs = Promise.all([createImg(img1), createImg(img2), createImg(img3)]);
  // // imgs.forEach(img => img.classList.add('parallel'));
  // imgs.then(data => data.forEach(d => d.classList.add('parallel')));
};

loadAll(imgArr);

// (async function () {
//   try {
//     await loadAll(imgArr);
//   } catch (err) {
//     console.error(err);
//   }
// })();
