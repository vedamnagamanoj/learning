// "use strict";
// const bookings = [];

// const createBooking = function (
//   flightNum = "A320",
//   numPassengers = 1,
//   price = 200 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123", undefined, 100);

// const flights = "LH234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 23456778899,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 23456778899) console.log("Check In");
//   else console.log("Wrong Passport");
// };

// checkIn(flights, jonas);
// console.log(flights, jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// console.log(jonas);
// newPassport(jonas);

// console.log(jonas);

// console.log(newPassport.toString());

// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");

//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = function (str, fn) {
//   return fn(str);
// };

// console.log(transformer("JavaScript is the best!", oneWord));
// console.log(transformer("JavaScript is the best!", upperFirstWord));

// function high5(item) {
//   console.log(`Hi! ${item}`);
// }

// ["Jonas", "Martin", "Adam"].forEach((item) => high5(item));

// function greet(greeting) {
//   console.log(this);
//   return (name) => {
//     console.log(`${greeting} ${name} ${this}`);
//   };
// }

// greet("Hello")("Jonas");

// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArr("Hello")("Jonas");
