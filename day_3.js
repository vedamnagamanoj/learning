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

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Rissoto",
//   "Pasta",
//   "Pizza",
// ]);

// console.log(ordersSet);
// console.log(ordersSet.size);
// console.log(ordersSet.has("Bread"));
// console.log(ordersSet.has("Pizza"));

// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// console.log(ordersSet);

// const ordersSetArr = [...ordersSet];
// console.log(ordersSetArr);

// restaurant.guestsNum = 0;
// const guests = restaurant.guestsNum ?? 10;

// console.log(guests);

// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Pizza",
//   owner: "Giovanni Rossi",
// };

// // rest1.numGuests = rest1.numGuests ?? 10;
// rest1.numGuests ??= 10;

// // rest2.numGuests = rest2.numGuests || 10;
// rest2.numGuests ||= 10;

// console.log(rest1, rest2);

///////////////////////////////////////
// Coding Challenge #1

// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
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

// // Coding Challenge #2

// // Let's continue with our football betting app!

// // 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [num, score] of game.scored.entries())
//   console.log(`Goal ${num + 1}: ${score}`);

// // 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// let sum = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) sum += odd;
// console.log(sum / odds.length);

// console.log(Object.values(game.odds).reduce((sum, odd) => sum + odd, 0) / 3);

// // 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// //       Odd of victory Bayern Munich: 1.33
// //       Odd of draw: 3.25
// //       Odd of victory Borrussia Dortmund: 6.5
// // Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// for (const team of Object.keys(game.odds)) {
//   // console.log(`Odds of victory of ${game[team] || "draw"}: ${game.odds[team]}`);
//   console.log(
//     `Odds of`,
//     game[team] ? `victory of ${game[team]}:` : `draw:`,
//     `${game.odds[team]}`
//   );
// }
// // BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// //       {
// //         Gnarby: 1,
// //         Hummels: 1,
// //         Lewandowski: 2
// //       }
// const scorers = {};
// game.scored.forEach((score) => (scorers[score] = ++scorers[score] || 1));

// console.log(scorers);

// GOOD LUCK 😀

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const [players1, players2] = [...game.players];
// console.log(players1, players2);

// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allplayers = [...players1, ...players2];
// console.log(allplayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// function printGoals(...players) {
//   const scored = game.scored;
//   const scoredObj = {};

//   scored.forEach((score) => {
//     scoredObj[score] = ++scoredObj[score] || 1;
//   });

//   players.forEach((player) =>
//     console.log(`${player} scored ${scoredObj[player] || 0} goals...`)
//   );
// }

// printGoals("Thiago", "Coutinho", "Lewandowski", "Gnarby", "Hummels");
// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// team1 < team2 && console.log("Team 1 is more likely to win");
// team2 < team1 && console.log("Team 2 is more likely to win");
// // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// // GOOD LUCK 😀

// for (const [idx, player] of allplayers.entries()) {
//   console.log(`${idx + 1}. ${player}`);
// }
// console?.log("Hello World");

// console.log(restaurant?.openingHours?.mon?.open);

// console.log(restaurant.order?.(0, 1));

// const properties = Object.keys(openingHours);
// const definitions = Object.values(openingHours);
// const complete = Object.entries(openingHours);
// console.log(properties);
// console.log(definitions);
// console.log(complete);

// for (const [day, { open, close }] of complete) {
//   console.log(
//     `On ${day} we open at ${open}:00 Hrs, and close at ${close}:00 Hrs`
//   );
// }
