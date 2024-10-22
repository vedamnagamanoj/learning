'use strict';

// function Person(firstName = 'User', birthYear = 1970) {
//   // console.log(firstName, birthYear);
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // this is very bad
//   // this.calcAge = function () {
//   //   console.log(2024 - this.birthYear);
//   // };
//   // console.log(this);
// }

// function add() {
//   // This function returns the sum of 2 + 2
//   return 2 + 2;
// }

// Person.prototype.calcAge = function () {
//   // jonas.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// const jonas = new Person('Jonas', 1991);
// const matilda = new Person('Matilda', 2015);
// const jack = new Person('Jack', 1998);
// const manas = {
//   firstName: 'Manas',
//   birthYear: 1995,
// };
// jonas.calcAge();
// console.log(matilda);

// console.log(jonas.__proto__ === Person.prototype);
// console.log(add.prototype);
// console.log(Person);
// console.log(jonas);
// console.log(manas.calcAge());

// Prototypes

// console.log(jonas.firstName);
// console.log(jonas.birthYear);
// console.log(jonas);

// console.log(manas.firstName);
// console.log(manas.birthYear);
// console.log(manas);

// console.log(matilda, jack);

// console.log(manas instanceof Person);

// Person('Jonas', 1991);

// When 'new' keyword is used

// 1. New {} is created
// 2. Function is called, this = {}
// 3. {} is linked to prototype
// 4. funciton is automatically returned {}

// Person.prototype.species = `Robo Sapien`;

// console.log(jonas.species === matilda.species, jonas.species, matilda.species);

// jonas.calcAge = function () {
//   console.log(`this is a function`);
// };

// jonas.calcAge();

// const joker = new Person('Joker');
// joker.calcAge();

// console.log(Person.__proto__);

// const arr = [3, 54, 1, 2, 5, 4];
// console.log(arr.__proto__);

// const obj1 = new Object('firstName', 'jonas');
