// "use strict";
// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   title: "Classico-Italiano",
//   area: "Via-Angelo-Tavanti-23-Firenze-Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Foccaccia", "Brushetta", "Garlic-Bread", "Caprese-Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 Enchanced Object Literals
//   openingHours,
//   // Before ES6
//   // openeingHours: openingHours,

//   // ES6 Enhanced methods
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   // Before ES6
//   // order: function() {},

//   orderDelivery({
//     starterIndex = 0,
//     mainIndex = 0,
//     time = "22:00",
//     address = "Home",
//   }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(
//       `Pizza is made with ${mainIngredient} and other items ${otherIngredients}`
//     );
//   },
// };

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer", // const [players1, players2] = ...game.players; console.log(players1, players2);
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Here");
// console.log(rest.set(2, "There"));

// rest
//   .set(3, "somewhere")
//   .set(4, "elsewhere")
//   .set(5, "nowhere")
//   .set("1", "a string");
// console.log(rest);

// console.log(rest.get(1));
// console.log(rest.get("1"));

// const arr = [1, 2];

// rest.set([1, 2], "key arr");
// rest.set(arr, "key arr");

// console.log(rest);
// console.log(rest.get(arr));
// console.log(rest.get([1, 2]));

// const arr = [
//   ["question", "What is the best programming language?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "Python"],
//   ["correct", 3],
//   [true, "Correct 🏆"],
//   [false, "Try Again 🥲"],
// ];

// const question = new Map(arr);

// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`${key}: ${value}`);
// }
// // const answer = prompt("Enter your choice: ");
// const answer = 3;

// console.log(question.get(answer === question.get("correct")));

// console.log(question.get("question"));
// console.log(question.get(1));
// console.log(question.get(2));
// console.log(question.get(3));
// console.log(question.get("correct"));
// console.log(question.get(true));
// console.log(question.get(false));

// convert object to map

// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap.get("thu"));

// console.log(question);

// for (const [key, value] of question) {
//   console.log(key, value);
// }

// convert map to array

// const newArr = [...question];
// console.log(newArr);
// console.log(typeof JSON.stringify(arr));
// console.log(JSON.stringify(newArr));

// console.log(JSON.stringify(arr) === JSON.stringify(newArr));

//////////////////////////////////////////////////////////////////////
// Coding Challenge #3
// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🟡 Yellow card"],
// ]);
//
// // Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// // 1. Create an array 'events' of the different game events that happened (no duplicates)
// // console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// console.log(gameEvents);
// console.log(gameEvents.delete(64));
// console.log(gameEvents);

// // 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// const gameTime = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${gameTime / gameEvents.size} minutes.`
// );

// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL
// for (const [min, evnt] of gameEvents) {
//   const half = min > 45 ? `Second` : `First`;
//   console.log(`[${half.toUpperCase()} HALF] ${min}: ${evnt}`);
// }
// // GOOD LUCK 😀
// //

// const airline = "TAP Air Portugal";
// const plane = "A320";

// // console.log(plane[0]);

// // console.log(airline.slice(7, -3));
// console.log(airline.slice(-3, -1));

// const checkMiddleSeat = function (seat = "") {
//   // A B C __ D E F  -> B and E are middle seats
//   // return seat.toUpperCase().indexOf("B") || seat.toUpperCase().indexOf("E");

//   return (
//     seat.slice(-1) === "B" || seat.slice(seat.length - 1, seat.length) === "E"
//   );
// };

// console.log(checkMiddleSeat("11B"));
// console.log(checkMiddleSeat("12A"));
// console.log(checkMiddleSeat("2E"));
// console.log(checkMiddleSeat("9C"));

// // Fix capitalization in passenger name

// const passenger = "joNaS";
// const passengerLower = passenger.toLowerCase();

// const passengerCorrect =
//   passenger[0].toUpperCase() + passengerLower.slice(-passenger.length + 1);
// console.log(passengerCorrect);

// // Comparing emails

// const email = "hello@jonas.io";
// const loginEmail = "    Hello@Jonas.Io \n";

// const correctEmail = loginEmail.trim().toLowerCase();
// console.log(correctEmail);
// console.log(email === correctEmail);

// // replacing

// const priceGB = "288,97$";
// const priceUS = priceGB.replace("$", "@").replace(",", ".");

// console.log(priceUS);

// // Practice exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   console.log(baggage.includes("gun"));
//   if (!(baggage.includes("knife") || baggage.includes("gun")))
//     console.log("Welcome");
//   else console.log("GET OUT");
// };

// checkBaggage("I have a laptop, some food and a pocket knife");
// checkBaggage(" I have socks and camera");
// checkBaggage("GOT SOME SNACKS AND A GUN FOR PROTECTION");

// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((name) => name[0].toUpperCase() + name.slice(-name.length + 1))
//     .join(" ");
// }

// console.log(capitalize("naga manoj vedam"));
// console.log(capitalize("vishakha khandekar"));

// // Padding
// const message = "Go to gate 23";

// console.log("credit card".padStart(30, "+"));
// console.log("password".padEnd(30, "+"));

// const creditCardNumber1 = 123456789012;
// const creditCardNumber2 = 12345678;

// function maskCreditCard(number) {
//   const numStr = number + "";
//   return numStr.slice(-4).padStart(numStr.length, "x");
// }

// console.log(maskCreditCard(creditCardNumber1));
// console.log(maskCreditCard(creditCardNumber2));

// Repeat

// const message = "Bad Weather...All Depatures Delayed...";

// console.log(message.repeat(5));

// // Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// // The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// // THIS TEST DATA (pasted to textarea)
// // underscore_case
// //  first_name
// // Some_Variable
// //   calculate_AGE
// // delayed_departure

// // SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// // underscoreCase      ✅
// // firstName           ✅✅
// // someVariable        ✅✅✅
// // calculateAge        ✅✅✅✅
// // delayedDeparture    ✅✅✅✅✅

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// const textAreaEl = document.querySelector("textarea");
// textAreaEl.style.width = `600px`;
// textAreaEl.style.height = `300px`;

// const buttonEl = document.querySelector("button");
// buttonEl.textContent = "Click Me!!!";

// function getMessage() {
//   const str = textAreaEl.value;
//   const splitOriginal = str.split("\n");

//   for (let [idx, name] of splitOriginal.entries()) {
//     if (name === "") continue;

//     const [firstName, lastName] = name.trim().split("_");
//     const camelCaseStr = `${firstName.toLowerCase()}${lastName[0].toUpperCase()}${lastName
//       .slice(1)
//       .toLowerCase()}`;
//     const paddedArr = camelCaseStr.padEnd(20, " ") + "✅".repeat(idx + 1);
//     console.log(paddedArr);
//   }
// }

// buttonEl.addEventListener("click", getMessage);

///////////////////////////////////////
// String Methods Practice

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// const flightsSplit = flights.split("+");
// // console.log(flightsSplit);

// for (const flight of flightsSplit) {
//   let [flightStatus, fromLocation, toLocation, journeyTime] = flight.split(";");

//   flightStatus = flightStatus.replaceAll("_", " ").trim();
//   flightStatus = flightStatus.includes("Delayed")
//     ? `🔴 ${flightStatus}`
//     : flightStatus;

//   fromLocation = fromLocation.slice(0, 3).toUpperCase();
//   toLocation = toLocation.slice(0, 3).toUpperCase();
//   journeyTime = journeyTime.replace(":", "h");

//   const finalStr = `${flightStatus} from ${fromLocation} to ${toLocation} (${journeyTime})`;

//   console.log(finalStr.padStart(44, " "));
// }
