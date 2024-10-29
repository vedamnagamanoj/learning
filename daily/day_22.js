'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// A Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  // return state;
  // budget.push({ value: -value, description, user: cleanUser });
};
const newBudget = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
console.log(newBudget);

const newBudget1 = addExpense(
  newBudget,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
console.log(newBudget1);

const newBudget2 = addExpense(newBudget1, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget2);

const checkExpenses = (state, limits) =>
  state.map(
    entry =>
      entry.value < -getLimit(limits, entry.user)
        ? { ...entry, flag: 'limit' }
        : entry
    // if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
  );
const finalBudget = checkExpenses(newBudget2, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // }
  // output = output.slice(0, -2);
  // console.log(output);

  // return state
  //   .filter(entry => entry.value <= -bigLimit)
  //   .map(entry => entry.description.slice(-2))
  //   .join(' / ');

  return state
    .reduce(
      (result, entry) =>
        (result +=
          entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ''),
      ''
    )
    .slice(0, -2);
};

const bigExpense = logBigExpenses(finalBudget, 100);
console.log(bigExpense);

// Removing unnecessary code

// jay: 500,

// if (!user) user = jonas

// let lim;
// if (spendingLimits[user]) {
//   lim = spendingLimits[user];
// } else {
//   lim = 0;
// }

// console.log(budget);

// const lim = spendingLimits[user] ? spendingLimits[user] : 0;
// const limit = spendingLimits[user] || 0;
// const limit = getLimit(user);

// let lim;
// if (spendingLimits[entry.user]) {
//   lim = spendingLimits[entry.user];
// } else {
//   lim = 0;
// }

// const limit = getLimit(entry.user);

// for (const entry of budget)
//   if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
// if (entry.value <= -bigLimit) {
//   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
// }
// Remove last '/ '
