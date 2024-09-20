"use strict";

// function calcAge(birthYear = 1997) {
//   const age = 2024 - birthYear;

//   function printAge() {
//     const output = `${firstName} is ${age} years old, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1901 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = "Steve";
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(2, 3));
//     }
//     // console.log(str);
//     console.log(millenial);
//   }
//   printAge();

//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = "meme";
// let job = "useless";
// const year = "newyear";

// console.log(addDecl(1, 2));
// console.log(addExpr(2, 3));
// console.log(addArrow(3, 4));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// var firstName = "Manas";

// const jonas = {
//   firstName: "Jonas",
//   birthYear: 1991,
//   calcAge: function () {
//     console.log(2024 - this.birthYear);

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//       isMillenial();
//     };
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey, ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExp(2, 4);

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const person = {
//   firstName: "Jonas",
//   age: 30,
// };

// const anotherPerson = person;

// anotherPerson.age = 31;

// console.log(person.age);
// console.log(anotherPerson.age);

let lastName = "Williams";
let oldLastName = lastName;

lastName = "Davis";

console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 24,
  family: ["father", "mother", "sister"],
};

const marriedJessica = Object.assign({ birthYear: 2000 }, jessica);
marriedJessica.lastName = "Davis";
marriedJessica.family.push("sister-in-law");

console.log("Before Marriage", jessica);
console.log("After Marriage", marriedJessica);
