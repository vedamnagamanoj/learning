"use strict";

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],

//   book(flightNum, passengerName) {
//     console.log(
//       `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );

//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}`,
//       passenger: passengerName,
//     });
//   },

//   cook,
// };

// // lufthansa.book(239, "Jonas Schmedtmann");
// // lufthansa.book(645, "Mike Schmedtmann");

// // console.log(lufthansa.bookings);

// const euroWings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
//   cook,
// };

// const book = lufthansa.book;
// // book(123, "John Players");

// function test() {
//   console.log(
//     `${this.airline}, ${this.iataCode}, ${this.bookings[0].flight}, ${this.bookings[0].passenger}`
//   );
// }

// // lufthansa.test = test;
// // euroWings.test = test;

// // lufthansa.test();

// // book.call(euroWings, 456, "Jokcey");
// // test.call(euroWings);

// const swiss = {
//   airline: "Swiss",
//   iataCode: "SW",
//   bookings: [],
//   cook,
// };

// // book.call(swiss, 789, "Pan America");
// // book.call(swiss, 111, "Pan India");
// // console.log(swiss);

// // Apply method

// const flightData = [583, "George Cooper"];

// // book.apply(swiss, flightData);
// // console.log(swiss);

// // book.call(swiss, ...flightData);
// // console.log(swiss);

// function cook() {
//   console.log(`${this.airline} ${this.iataCode} `);
// }

// // cook.call(lufthansa);
// // cook.call(euroWings);
// // cook.call(swiss);

// // Bind method

// const euroBook = book.bind(euroWings, ...[123, "Jonas"]);

// // with event listeners

// function buyPlanes() {
//   this.planes++;
//   // console.log(this);
//   console.log(this.planes);
// }

// lufthansa.planes = 300;

// const buyLuf = buyPlanes.bind(lufthansa);

// document.querySelector(".new-plane-btn").addEventListener("click", buyLuf);

// // Partial application

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// const addGST = addTax.bind(null, 0.18);

// console.log(addVAT(200));
// console.log(addGST(100));

// function calcGST() {
//   return function (value) {
//     return 0.18 * value + value;
//   };
// }
// console.log(calcGST()(100));

// ///////////////////////////////////////
// // Coding Challenge #1

// Let's build a simple poll app!

// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// GOOD LUCK 😀

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const userInput = prompt(`${this.question}
      ${this.options.map((option) => option)}     
      (Write option number)`);

    if (
      userInput >= 0 &&
      userInput < this.answers.length &&
      userInput !== null
    ) {
      this.answers[userInput]++;
      this.displayResults();
    } else this.registerNewAnswer();
  },
  displayResults(type = "string") {
    if (type === "array") console.log(this.answers);
    if (type === "string")
      console.log(`Poll results are ${this.answers.map((answer) => answer)}`);
  },
};

document
  .querySelector(".answer-poll-btn")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
