// "use strict";

// const restaurant = {
//   title: "Classico-Italiano",
//   area: "Via-Angelo-Tavanti-23-Firenze-Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Foccaccia", "Brushetta", "Garlic-Bread", "Caprese-Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0,
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 0,
//     mainIndex = 0,
//     time = "22:00",
//     address = "Home",
//   }) {
//     console.log(
//       `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(
//       `Pizza is made with ${mainIngredient} and other items ${otherIngredients}`
//     );
//   },
// };

// console.log(null || undefined);

// const guests1 = restaurant.numGuests || 10;
// console.log(guests1);

// restaurant.orderPizza("Mushrooms", "onion", "olive", "spinach");

// // Rest Operator

// const arr = [1, 2, ...[3, 4]]; // Spread - because on right side of assignment operator
// const [a, b, ...other] = [1, 2, 3, 4, 5]; // Rest - because on left side of assignment operator
// const testarr = [9, 8, 7, 6, 5, 4];

// const [p, q, r, ...remaining] = [...testarr];

// console.log(p, q, r, remaining);
// console.log(testarr);

// const [pizza, , risotto, ...restItems] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, restItems);

// With Objects - Rest
// const { sat: weekends, ...weekdays } = restaurant.openingHours;

// console.log(weekdays);
// console.log(weekends);

// With functions - Rest

// const add = function (...numbers) {
//   console.log(numbers.reduce((sum, number) => sum + number, 0));
// };

// add(2, 3);
// add(5, 3, 5, 2);

// With objects

// const newRestaurant = { ...restaurant, founder: "Human", foundedYear: 1997 };

// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.title = "Fasak";
// console.log(restaurantCopy);
// console.log(restaurant);
// Real-world expample

// const ingredients = [
//   prompt("Let's make pasta! Ingredient - 1"),
//   prompt("Let's make pasta! Ingredient - 2"),
//   prompt("Let's make pasta! Ingredient - 3"),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// const str = "Jonas";

// const letters = [...str, " ", "s"];
// console.log(letters);

// // Copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// // Join array

// const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(completeMenu);

//
// restaurant.mainMenu = [...restaurant.mainMenu, "Burger"];
// console.log(restaurant.mainMenu);

// const arr = [4, 5, 6];
// const newArr = [1, 2, 3, ...arr];

// console.log(arr);
// console.log(newArr);
// console.log(...newArr);

// restaurant.orderDelivery({
//   time: "22:39",
//   address: "home",
//   mainIndex: 2,
//   starterIndex: 3,
// });

// // Object in object - Nested

// // const { open, close } = restaurant.openingHours.fri;
// const {
//   openingHours: {
//     fri: { open: start, close: stop },
//   },
// } = restaurant;

// console.log(start, stop);

// const { title: locationName = "any", area } = restaurant;

// console.log(locationName);
// console.log(area);

// // Mutating Variables

// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14,
// };

// ({ a, b } = obj);

// console.log(a, b);

// let [first, second, ...rest] = restaurant.starterMenu;

// console.log(first);
// console.log(second);
// // console.log(rest);
// // console.log(restaurant["startMenu"]);

// [second, first] = [first, second];

// console.log(first);
// console.log(second);
// // console.log(rest);
// // console.log(restaurant["startMenu"]);

// console.log(restaurant.order(2, 0));

// let [starterItem, mainItem] = restaurant.order(2, 0);

// console.log(starterItem, mainItem);

// // Nested Destructuring

// const nested = [2, 4, [5, 6]];

// let [, i, j] = nested;

// console.log(i, j);

// let [, k, [l, m]] = nested;

// console.log(k, l, m);

// // Default values

// const [p, q = 1, r = 0] = [8, 9];

// console.log(p, q, r);
