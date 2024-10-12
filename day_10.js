'use strict';

// // Some
// const arr = [1, 2, 3, 4, -5];

// console.log(arr.includes(-1));
// console.log(arr.includes(1));
// console.log(arr.includes(0));

// console.log(arr.some(a => a < 0));

// // Every

// console.log(arr.every(a => a > 0));
// console.log(arr.every(a => Math.abs(a) > 0));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.sort());
// console.log(movements.sort((a, b) => b - a));

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// arr.fill(0, arr.length - 3);

// console.log(arr);
// const newArr = new Array(7).fill(0);
// console.log(newArr);

// const anotherArr = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(anotherArr);

// labelBalance.addEventListener('click', () => {
// const movementsUI = Array.from(
// document.querySelectorAll('.movements__value'),
// el => Number(el.textContent.replace('€', ''))
// );
// console.log(movementsUI);
// });

//////////////////////////////////////////////////////////////////////////////////////////

// // 1
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((res, mov) => res + mov, 0);

// console.log(bankDepositSum);

// // 2
// const numBankDepositSumAtleast1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// const numBankDepositSumAtleast10002 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((res, mov) => (mov >= 1000 ? ++res : res), 0);

// console.log(numBankDepositSumAtleast1000);
// console.log(numBankDepositSumAtleast10002);

// // 3
// const { depositSum: totalDeposits, withdrawalSum: totalWithdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (res, mov) => {
//       // mov > 0 ? (res.depositSum += mov) : (res.withdrawalSum += Math.abs(mov));
//       res[mov > 0 ? 'depositSum' : 'withdrawalSum'] += Math.abs(mov);
//       return res;
//     },
//     { depositSum: 0, withdrawalSum: 0 }
//   );

// console.log(totalDeposits, totalWithdrawals);

// // 4

// function convertTitleCase(str) {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const captitalize = letter => letter[0].toUpperCase() + letter.slice(1);

//   const titleCaseStr = str
//     .toLowerCase()
//     .split(' ')
//     .filter(letter => letter !== '')
//     .map(letter => (exceptions.includes(letter) ? letter : captitalize(letter)))
//     .join(' ');

//   return captitalize(titleCaseStr);
// }

// console.log(convertTitleCase(`this is a nice title`));
// console.log(convertTitleCase(`this is a LONG title but not too long`));
// console.log(convertTitleCase(`and here is another  title with an EXAMPLE`));

// displayMovements(account1.movements);
// createUserNames(accounts);
// calcPrintBalance(account1.movements);
// calcDisplaySummary(account1);

// const usdBalance = movements
//   .map(movement => Math.round(movement * 1.09))
//   .filter(movement => movement > 0)
//   .reduce((result, movement) => result + movement, 0);

// console.log(usdBalance);

// const anotherMovements = [-650, -200, -450, -1, -55];
// const maxValue = anotherMovements.reduce(
//   (result, movement) => (movement > result ? movement : result),
//   anotherMovements[0]
// );
// console.log(maxValue);

// const calcBalance = function (total, movement) {
//   return total + movement;
// };

// const calcBalance2 = function (total) {
//   return total;
// };

// const balance = movements.reduce((total, movement) => total + movement, 0);
// const balance2 = movements.reduce(calcBalance, 0);
// const balance3 = movements.reduce(calcBalance2, 0);
// console.log(balance);
// console.log(balance2);
// console.log(balance3);

// const user = 'Steven Shankar Khan';

// const userName = user
//   .toLowerCase()
//   .split(' ')
//   .map(word => word[0])
//   .join('');
// .reduce((str, word) => str + word[0], "");

// const deposits = movements.filter(movement => movement > 0);
// const withdrawals = movements
//   .filter(movement => movement < 0)
//   .map(amount => Math.abs(amount));
// console.log(deposits);
// console.log(withdrawals);

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// // Slice
// let arr = ["a", "b", "c", "d", "e"];

// console.log(arr.slice(2, 5));
// console.log(arr.slice(-5, -2));

// // Splice

// // console.log(arr.splice(2));
// // arr.splice(0, 2);
// console.log(arr);

// const arr2 = ["j", "i", "h", "g", "f"];

// arr2.reverse();

// console.log([...arr, ...arr2]);

// // Concat

// const letters = arr.concat(arr2);
// console.log(letters);

// // Join
// console.log(arr.join(" - "));

// const arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0));
// console.log(arr[7]);
// console.log(arr.at(7));

// Getting the last element from the array

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach((movement, idx, arr) =>
// movement > 0
// ? console.log(`${arr}, ${idx} You deposited ${movement}`)
// : console.log(`${arr}, ${idx} You Withdrew ${Math.abs(movement)}`)
// );
//
//
//

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach((currency, code, compl) => {
//   console.log(currency, code, compl);
// });

// const currenciesUnique = new Set(["USD", "GBP", "INR", "EUR", "EUR"]);

// currenciesUnique.forEach((code, _, curr) => console.log(`${code} ${curr}`));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1
// dogs.forEach(
//   dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
// );
// console.log(dogs);

// // 2

// const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(sarahDog);
// console.log(
//   `Sarah's dog is eating too ${
//     sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
//   } food!`
// );

// 3

// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recommendedFood)
//   .flatMap(dog => dog.owners);

// console.log(ownersEatTooMuch);

// const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
//   (res, dog) => {
//     dog.curFood > dog.recommendedFood
//       ? res.ownersEatTooMuch.push(...dog.owners)
//       : res.ownersEatTooLittle.push(...dog.owners);
//     return res;
//   },
//   {
//     ownersEatTooMuch: [],
//     ownersEatTooLittle: [],
//   }
// );

// console.log(ownersEatTooLittle, ownersEatTooMuch);

// // 4
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

// // 5
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// // 6
// function okayAmtFood(dog) {
//   return (
//     dog.curFood > dog.recommendedFood * 0.9 &&
//     dog.curFood < dog.recommendedFood * 1.1
//   );
// }

// console.log(dogs.find(dog => okayAmtFood(dog)));

// // 7

// const okayDogs = dogs.filter(dog => okayAmtFood(dog));
// console.log(okayDogs);

// const sortedDogs = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogs, sortedDogs);
