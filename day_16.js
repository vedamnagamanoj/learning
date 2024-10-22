'use strict';

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // this.species = `${this.firstName} Sapiens`;
}

Person.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};

const jonas = new Person('jonas', 1991);
const matilda = new Person('Matilda', 1993);

Person.prototype.species = `Robo Sapien`;

// console.log(jonas.calcAge());
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(Person.prototype);

// console.log(jonas.__proto__);

// // const obj1 = {
// //   fullName: 'Reddy',
// //   age: 24,
// //   __my__: {
// //     calcAge: function () {
// //       return `age`;
// //     },
// //     __my__: {},
// //   },
// // };

// // console.log(obj1.__my__.__my__);

// Person.prototype.species = `Robo Sapiens`;

// console.log(jonas.species);

// console.log(Person.prototype.hasOwnProperty('species'));

// console.log(jonas.__proto__.hasOwnProperty('species'));

// console.log(jonas.__proto__.__proto__);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = new Array(1, 2, 3, 4, 5, 7);
// console.log(arr2.toString());

// console.log(arr1.__proto__ === arr2.__proto__);
// console.log(Array.prototype);

// // Method overriding

// arr2.__proto__.toString = function () {
//   return `This is an array to string`;
// };

// console.log(arr1.toString());
// console.log(arr2.toString());

// const h1El = document.querySelector('h1');
// console.dir(h1El);

// Coding Challenge - 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;

  this.carPosition = function () {
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  this.carPosition();
};

Car.prototype.brake = function () {
  this.speed -= 5;
  this.carPosition();
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

console.log(car1);
console.log(car2);

car1.accelerate();
car1.brake();
car1.accelerate();

car2.brake();
car2.accelerate();
car2.brake();
