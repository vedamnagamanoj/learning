const PersonPrototype = {
  species: 'Homo Sapiens',

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  introduce() {
    console.log(`Hi I'm a human`);
  },
};

const jonas = Object.create(PersonPrototype);
jonas.init('Jonas', 1993);

const StudentPrototype = Object.create(PersonPrototype);
StudentPrototype.init = function (firstName, birthYear, course) {
  PersonPrototype.init.call(this, firstName, birthYear);
  this.course = course;
};
// StudentPrototype.introduce = function () {
//   console.log(`Hi I'm a Student`);
// };

const mike = Object.create(StudentPrototype);
mike.init('Mike', 2004, 'Computer Science');

console.log(mike);
mike.introduce();

// const obj1 = Object.create({});

// obj1.prop1 = 'property1';
// obj1.method1 = function () {
//   return `This is method 1`;
// };
// const obj2 = Object.create(obj1);
// obj2.prop2 = 'property2';
// obj2.method2 = function () {
//   return `This is method 2`;
// };

// const obj3 = Object.create(obj2);

// console.log(obj3.prop1);
// console.log(obj3.prop2);
// console.log(obj3.method1());
// console.log(obj3.method2());
// console.log(obj3);
