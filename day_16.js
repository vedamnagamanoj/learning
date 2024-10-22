'use strict';
const jonas = new Person('jonas', 1991);

function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // this.species = `${this.firstName} Sapiens`;
}

Person.hey = function () {
  console.log(this);
  console.log(`Hey there 👋`);
};

Person.prototype.calcAge = function () {
  return 2024 - this.birthYear;
};

// Person.hey();

// console.log(jonas);

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

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;

//   this.carPosition = function () {
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   };
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   this.carPosition();
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   this.carPosition();
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// console.log(car1);
// console.log(car2);

// car1.accelerate();
// car1.brake();
// car1.accelerate();

// car2.brake();
// car2.accelerate();
// car2.brake();

// class expression
// const personCl = class{}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    // this.fromTo = function () {
    //   console.log(`from to const`);
    // };
  }
  // the contents /methods outside the constructor will be directly added to the .prototype property

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`this is jessica`);
  }

  get age() {
    return this.calcAge();
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(this);
    console.log(`hey there 👋`);
  }
}

const jessica = new PersonCl('Jessica Davis', 1993);

// console.log(jessica.__proto__ === PersonCl.prototype);
// console.log(jessica);

// Classes are not Hoisted  even if they are created using declaration
// Class is a first-class citizens
// Classes are always executed in strict mode

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(movement) {
    this.movements.push(movement);
  },
};

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// jessica._fullName = 'Jessica Devis';

const walter = new PersonCl('Walter Fucking White', 1965);

// Static methods

// PersonCl.hey();

const PersonProto = {
  species: 'Robo Sapiens',
  calcAge() {
    return 2024 - this.birthYear;
  },
  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steve = Object.create(PersonProto);
steve.birthYear = 2000;

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2006);

// Coding Challenge - 2

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  carPosition() {
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  accelerate() {
    this.speed += 10;
    this.carPosition();
  }

  brake() {
    this.speed -= 5;
    this.carPosition();
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new Car('Ford', 120);

car1.carPosition();
console.log(car1.speedUS);
car1.accelerate();
car1.accelerate();
car1.brake();
car1.speedUS = 80; // speed in US
car1.carPosition();
