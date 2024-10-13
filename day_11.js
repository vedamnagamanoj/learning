'use strict';

// New Lecture

// console.log(23 === 23.0);

// // converting string to numbers
// console.log(Number('23'));
// console.log(+'23');

// // parsing
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('23e'));
// console.log(Number.parseInt('2px', 10));

// console.log(Number.parseFloat('   24.5rem', 10));
// console.log(Number.parseInt('24.5rem', 10));

// console.log(Number.isNaN('23'));
// console.log(Number.isNaN(20));
// console.log(Number.isNaN(+'20x'));

// console.log(Number.isNaN(24 / 0));

// console.log(Number.isFinite(24 / 0));
// console.log(Number.isFinite('23'));

// console.log(Number.isInteger(23.4));
// console.log(Number.isInteger(23.0));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(25 ** 0.5);

// console.log(Math.max(5, 18, +'23', 11, 2));
// console.log(Math.min(5, 18, +'23', 11, 2));

// console.log(Math.PI * 2 * 23);

// // console.log(Math.trunc(Math.random() * 10) + 1);

// function generateRandomValue(min, max) {
//   return Math.trunc(Math.random() * max - min + 1) + min;
// }

// for (let i = 0; i < 10; i++) console.log(generateRandomValue(2, 6));

// console.log(Math.trunc(23.9));
// console.log(Math.round(23.9));
// console.log(Math.ceil(23.1));
// console.log(Math.floor(23.9));

// console.log(+(2.345).toFixed(2));

// console.log(+new Number(2.345).toFixed(2));

// console.log(5 % 2);

// labelBalance.addEventListener('click', () => {
//   [...document.querySelectorAll('.movements__row')].forEach(
//     (row, i) =>
//       (row.style.backgroundColor = i % 3 === 0 ? 'yellowgreen' : 'orangered')
//   );
// });

// const diameter = 874_600_000_000;
// console.log(diameter);

// const transferFee = 15_00;

// const PI = 3.1415;
// console.log(PI);

// console.log(Number('84_232_11'));
// console.log(Math.ceil(15.14_343));

// console.log(2 ** 53 / 2);
// console.log(typeof 999999999994503599627370496);

// console.log(2 ** 53 - 1 + 12);

// // for (let i = Number.MAX_SAFE_INTEGER; ; i++) console.log(i);

// console.log(240237498327596349573423432n);
// console.log(BigInt(240237498327596349573423432));

// // Operations

// console.log(typeof (BigInt(100000) + 10000n));
// console.log(20n === 20);
// console.log(20n == 20);

// // Creating a date

// const todaysDate = new Date(account1.movementsDates[0]);
// console.log(todaysDate);

// console.log(new Date(0));

// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// // Working with dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);

// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142237180000));

// console.log(Date.now());

// console.log(new Date(Date.now()));

// future.setFullYear(2040);
// console.log(future);

// const num = 3888398.54;
// const options = {
//   style: 'currency',
//   unit: 'celsius',
//   currency: 'INR',
// };
// console.log(new Intl.NumberFormat(navigator.locale, options).format(num));
// console.log(new Intl.NumberFormat('de-DE').format(num));
// console.log(new Intl.NumberFormat('en-GB').format(num));
