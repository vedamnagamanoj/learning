// 'use strict';
// // const jonas = new Person('jonas', 1991);

// // function Person(firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;

// //   // this.species = `${this.firstName} Sapiens`;
// // }

// // // Person.hey = function () {
// // //   console.log(this);
// // //   console.log(`Hey there 👋`);
// // // };

// // Person.prototype.calcAge = function () {
// //   return 2024 - this.birthYear;
// // };

// // const Student = function (firstName, birthYear, course) {
// //   Person.call(this, firstName, birthYear);
// //   this.course = course;
// // };

// // // linking prototypes
// // Student.prototype = Object.create(Person.prototype);

// // Student.prototype.introduce = function () {
// //   console.log(
// //     `My name is ${this.firstName}, I'm ${this.calcAge()} years old. And I'm a ${
// //       this.course
// //     } Engineer`
// //   );
// // };

// // const mike = new Student('Mike', 2004, 'Computer Science');
// // Student.prototype.constructor = Student;
// // // console.log(Student.prototype.constructor);
// // // // Person.hey();

// // // // console.log(jonas);

// // // const matilda = new Person('Matilda', 1993);

// // // Person.prototype.species = `Robo Sapien`;

// // // // console.log(jonas.calcAge());
// // // // console.log(jonas.hasOwnProperty('firstName'));
// // // // console.log(jonas.hasOwnProperty('species'));

// // // // console.log(Person.prototype);

// // // // console.log(jonas.__proto__);

// // // // // const obj1 = {
// // // // //   fullName: 'Reddy',
// // // // //   age: 24,
// // // // //   __my__: {
// // // // //     calcAge: function () {
// // // // //       return `age`;
// // // // //     },
// // // // //     __my__: {},
// // // // //   },
// // // // // };

// // // // // console.log(obj1.__my__.__my__);

// // // // Person.prototype.species = `Robo Sapiens`;

// // // // console.log(jonas.species);

// // // // console.log(Person.prototype.hasOwnProperty('species'));

// // // // console.log(jonas.__proto__.hasOwnProperty('species'));

// // // // console.log(jonas.__proto__.__proto__);

// // // // const arr1 = [1, 2, 3, 4, 5];
// // // // const arr2 = new Array(1, 2, 3, 4, 5, 7);
// // // // console.log(arr2.toString());

// // // // console.log(arr1.__proto__ === arr2.__proto__);
// // // // console.log(Array.prototype);

// // // // // Method overriding

// // // // arr2.__proto__.toString = function () {
// // // //   return `This is an array to string`;
// // // // };

// // // // console.log(arr1.toString());
// // // // console.log(arr2.toString());

// // // // const h1El = document.querySelector('h1');

// // // // console.dir(h1El);

// // // Coding Challenge - 1

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;

// //   this.carPosition = function () {
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// //   };
// // };
// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   this.carPosition();
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   this.carPosition();
// // };

// // const EV = function (make, speed, charge) {
// //   Car.call(this, make, speed);
// //   this.charge = charge;
// // };

// // // Linking the prototypes
// // EV.prototype = Object.create(Car.prototype);
// // EV.prototype.constructor = Car;

// // EV.prototype.chargeBattery = function (chargeTo) {
// //   this.charge = chargeTo;
// // };
// // EV.prototype.carPosition = function () {
// //   console.log(`this is in tesla`);
// // };
// // EV.prototype.accelerate = function () {
// //   this.speed += 20;
// //   this.charge -= 1;

// //   console.log(
// //     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
// //   );
// // };
// // EV.prototype.brake = function () {
// //   this.speed -= 10;
// //   this.charge += 1;
// //   console.log();
// // };

// // const tesla = new EV('Tesla', 120, 95);

// // // const car1 = new Car('BMW', 120);
// // // const car2 = new Car('Mercedes', 95);

// // // console.log(car1);
// // // console.log(car2);

// // // car1.accelerate();
// // // car1.brake();
// // // car1.accelerate();

// // // car2.brake();
// // // car2.accelerate();
// // // car2.brake();

// // // class expression
// // // const personCl = class{}

// // // Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//     // this.fromTo = function () {
//     //   console.log(`from to const`);
//     // };
//   }
//   // the contents /methods outside the constructor will be directly added to the .prototype property

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   introduce() {
//     console.log(`Hi this is ${this.fullName}`);
//   }

//   get age() {
//     return this.calcAge();
//   }

//   static hey() {
//     console.log(this);
//     console.log(`hey there 👋`);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
// }

// const martha = new StudentCl(
//   'Martha Naidu',
//   2003,
//   'Electronics and Communications'
// );

// // const jessica = new PersonCl('Jessica Davis', 1993);

// // // console.log(jessica.__proto__ === PersonCl.prototype);
// // // console.log(jessica);

// // // Classes are not Hoisted  even if they are created using declaration
// // // Class is a first-class citizens
// // // Classes are always executed in strict mode

// // const account = {
// //   owner: 'Jonas',
// //   movements: [200, 530, 120, 300],

// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },
// //   set latest(movement) {
// //     this.movements.push(movement);
// //   },
// // };

// // // console.log(account.latest);
// // // account.latest = 50;
// // // console.log(account.movements);

// // // jessica._fullName = 'Jessica Devis';

// // const walter = new PersonCl('Walter Fucking White', 1965);

// // // Static methods

// // // PersonCl.hey();

// // const PersonProto = {
// //   species: 'Robo Sapiens',
// //   calcAge() {
// //     return 2024 - this.birthYear;
// //   },
// //   init(fullName, birthYear) {
// //     this.fullName = fullName;
// //     this.birthYear = birthYear;
// //   },
// // };

// // const steve = Object.create(PersonProto);
// // steve.birthYear = 2000;

// // const sarah = Object.create(PersonProto);
// // sarah.init('Sarah', 2006);

// // Coding Challenge - 2

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   carPosition() {
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   accelerate() {
//     this.speed += 10;
//     this.carPosition();
//     return this;
//   }

//   brake() {
//     this.speed -= 5;
//     this.carPosition();
//     return this;
//   }

//   get speedUS() {
//     return `${this.speed / 1.6} mi/h`;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EV extends Car {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   get info() {
//     return `${this.make} is going at ${this.speed} km/h, with a charge of ${
//       this.#charge
//     }`;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge -= 1;

//     console.log(this.info);
//     return this;
//   }

//   brake() {
//     this.speed -= 5;
//     this.#charge += 1;
//     console.log(this.info);
//     return this;
//   }

//   chargeBatteryTo(percent) {
//     this.#charge = percent;
//     console.log(this.info);
//     return this;
//   }
// }

// const rivian = new EV('rivian', 120, 94);
// console.log(rivian);
// // console.log(rivian.#charge);
// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .chargeBatteryTo(50)
//   .accelerate();

// console.log(rivian.speedUS);

// // const car1 = new Car('Ford', 120);

// // car1.carPosition();
// // console.log(car1.speedUS);
// // car1.accelerate();
// // car1.accelerate();
// // car1.brake();
// // car1.speedUS = 80; // speed in US
// // car1.carPosition();

// // class Account {
// //   // Public Fields
// //   locale = navigator.language;

// //   // Private Fields
// //   #movements = [];
// //   #pin;

// //   constructor(owner, currency, pin) {
// //     this.owner = owner;
// //     this.currency = currency;

// //     // Protected Property
// //     this.#pin = pin;

// //     console.log(`Thanks for opening account, ${this.owner}`);
// //   }
// //   // Public methods
// //   getMovements() {
// //     return this.#movements;
// //   }

// //   deposit(value) {
// //     this.#movements.push(value);
// //     return this;
// //   }

// //   withdrawal(value) {
// //     this.#movements.push(-value);
// //     return this;
// //   }

// //   _approveLoan(value) {
// //     return true;
// //   }

// //   requestLoan(value) {
// //     if (this.#approveLoan(value)) {
// //       this.deposit(value);
// //       console.log(`loan approved`);
// //     }
// //     return this;
// //   }

// //   // Private Methods
// //   #approveLoan(value) {
// //     return true;
// //   }
// // }

// // const acc1 = new Account('Jonas', 'EUR', 1111);
// // // acc1.movements.push(200);
// // acc1.deposit(240);
// // // acc1.movements.push(-30);
// // acc1.withdrawal(140);
// // // console.log(acc1.#pin);

// // acc1
// //   .deposit(300)
// //   .deposit(540)
// //   .withdrawal(30)
// //   .requestLoan(25000)
// //   .withdrawal(4000);
// // console.log(acc1.getMovements());
