'use strict';

// const arr = [1, 2, 3, 4, 5, 6];

// const mapArr = arr.map(item => item * 2);
// const filterArr = arr.filter(item => item % 2 === 0);
// const reduceArr = arr.reduce((sum, item) => sum + item, 0);

// console.log(arr, mapArr, filterArr, reduceArr);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUSD = 1.09;

// const movementsUSD = movements.map(movement => {
//   return Math.round(movement * euroToUSD);
// });
// console.log(movements);
// console.log(movementsUSD);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// function calcAverageHumanAge(ages) {
//   const humanDogAges = ages.map(age => (age <= 2 ? age * 2 : age * 4 + 16));
//   console.log(humanDogAges);

//   const majorDogs = humanDogAges.filter(age => age >= 18);
//   console.log(majorDogs);

//   const avgMajorDogAge = Math.round(
//     majorDogs.reduce((result, age) => result + age, 0) / majorDogs.length
//   );
//   console.log(avgMajorDogAge);
// }

// // Challenge 3 - solve challenge 2 using arrow functions

// const calcAverageHumanAgeArrow = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
//     .filter(age => age >= 18)
//     .reduce((result, age, _, arr) => result + age / arr.length, 0);

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]));
