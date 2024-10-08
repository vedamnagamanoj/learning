"use strict";

// let myName = "first";

// if (myName == "first") {
//   console.log(myName == "second");
// }

// console.log(myName);
// console.log([] == []);

// const runOnce = function () {
//   console.log(`this will run only once`);
// };

// runOnce();

// (function () {
//   const isPrivate = true;
//   console.log(`This will also run only once`);
// })();

// (() => console.log(`This is IIFE in an arrow function`))();

// {
//   const isPrivate = 23;
//   var notPrivate = true;
// }

// console.log(notPrivate);
// console.log(isPrivate);

// function anotherMessage() {
//   console.log(`another function in global scope`);
// }
// let passengerCount = 2;
// const secureBooking = function () {
//   let passengerCount = 0;
//   const messageRandom = function () {
//     console.log(`a random message`);
//   };

//   // function anotherMessage() {
//   //   console.log("another random message");
//   // }

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//     messageRandom();
//     anotherMessage();
//   };
// };

// const booker = secureBooking();

// booker();
// booker();

// console.dir(booker);
//
// let f;
//
// const g = function () {
//   const a = 23;
//
//   f = function () {
//     console.log(a * 2);
//   };
// };
//
// const h = function () {
//   const b = 777;
//
//   f = function () {
//     console.log(b * 2);
//   };
// };
//
// g();
// f();
//
// h();
// f();
//

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(() => {
//     console.log(`we are now baording all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// // setTimeout(() => console.log("Hello World"), 3000);

// boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  const colors = ["red", "green", "blue", "cyan", "magenta", "yellow"];

  header.addEventListener("click", () => {
    const idx = Math.trunc(Math.random() * colors.length);
    console.log(idx);
    header.style.color = colors[idx];
  });
})();
