'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Functions

const displayMovements = function (account) {
  containerMovements.innerHTML = '';

  account.movements.forEach((movement, idx) => {
    const movementType = movement > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${movementType}">${
      idx + 1
    } ${movementType}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${Math.abs(movement)}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUserNames = function (accounts) {
  accounts.forEach(
    account =>
      (account.userName = account.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
};

function calcPrintBalance(account) {
  account.balance = account.movements.reduce(
    (total, movement) => total + movement,
    0
  );
  labelBalance.textContent = `${account.balance}€`;
}

function calcDisplaySummary(account) {
  const depositAmount = account.movements
    .filter(movement => movement > 0)
    .reduce((result, movement) => result + movement, 0);
  labelSumIn.textContent = `${depositAmount}€`;

  const withdrawalAmount = account.movements
    .filter(movement => movement < 0)
    .map(movement => Math.abs(movement))
    .reduce((result, movement) => result + movement, 0);
  labelSumOut.textContent = `${withdrawalAmount}€`;

  const interestAmount = depositAmount * account.interestRate * 0.01;
  labelSumInterest.textContent = `${interestAmount}€`;
}
function updateUI(currentAccount) {
  // display the resutls
  displayMovements(currentAccount);
  calcPrintBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}
// Starting application
createUserNames(accounts);
let currentAccount;

// Handling Events

btnLogin.addEventListener('click', evnt => {
  evnt.preventDefault();
  // get and verify username and pin
  currentAccount = accounts.find(
    account => account.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    containerApp.style.opacity = 1;

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', evnt => {
  evnt.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    account => account.userName === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    currentAccount.userName !== receiverAccount?.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    updateUI(currentAccount);

    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
    inputTransferTo.blur();
  }
});

btnLoan.addEventListener('click', evnt => {
  evnt.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(movement => movement >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  } else {
    console.log('Loan Rejected');
  }

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', evnt => {
  evnt.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const deleteAccountIndex = accounts.findIndex(
      account => account.userName === currentAccount.userName
    );

    // console.log(accounts.indexOf(currentAccount));
    console.log(deleteAccountIndex);
    accounts.splice(deleteAccountIndex, 1);
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = '';
  }
});

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

// {
//   // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and
//   // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope
//   // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is
//   // used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
//   // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders.
//   // Placeholders with the same ids are connected.
//   // Example:
//   "Print to console": {
//     "scope": "javascript,typescript",
//     "prefix": "cl",
//     "body": ["console.log($1);"],
//     "description": "Log output to console"
//   },

//   "reactComponent": {
//     "prefix": "rfc",
//     "scope": "javascript,typescript,javascriptreact",
//     "body": [
//       "function ${1:${TM_FILENAME_BASE}}() {",
//       "\treturn (",
//       "\t\t<div>",
//       "\t\t\t$0",
//       "\t\t</div>",
//       "\t)",
//       "}",
//       "",
//       "export default ${1:${TM_FILENAME_BASE}}",
//       ""
//     ],
//     "description": "React component"
//   },
//   "reactStyledComponent": {
//     "prefix": "rsc",
//     "scope": "javascript,typescript,javascriptreact",
//     "body": [
//       "import styled from 'styled-components'",
//       "",
//       "const Styled${TM_FILENAME_BASE} = styled.$0``",
//       "",
//       "function ${TM_FILENAME_BASE}() {",
//       "\treturn (",
//       "\t\t<Styled${TM_FILENAME_BASE}>",
//       "\t\t\t${TM_FILENAME_BASE}",
//       "\t\t</Styled${TM_FILENAME_BASE}>",
//       "\t)",
//       "}",
//       "",
//       "export default ${TM_FILENAME_BASE}",
//       ""
//     ],
//     "description": "React styled component"
//   }
// }
