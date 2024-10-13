'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-06-28T09:15:04.904Z',
    '2024-07-01T10:17:24.185Z',
    '2024-08-08T14:11:59.604Z',
    '2024-09-27T17:01:17.194Z',
    '2024-10-09T23:36:17.929Z',
    '2024-10-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210.99, -1000, 8500, -30.49],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-12-30T09:48:16.867Z',
    '2023-06-25T06:04:23.907Z',
    '2024-07-25T14:18:46.235Z',
    '2024-08-05T16:33:06.386Z',
    '2024-09-10T14:43:26.374Z',
    '2024-10-10T18:49:59.371Z',
    '2024-10-12T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

let currentAccount;
let isSorted = false;

// Functions

function displayMovements(account, sort = false) {
  containerMovements.innerHTML = '';
  const sortedMovements = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  sortedMovements.forEach((movement, idx) => {
    const movementType = movement > 0 ? 'deposit' : 'withdrawal';

    const movementDate = new Date(account.movementsDates[idx]);
    const { day, month, year } = getDate(movementDate);

    // Formatting the currency
    const formattedMovements = formatCurrency(
      movement,
      account.locale,
      account.currency
    );

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${movementType}">${
      idx + 1
    } ${movementType}</div>
          <div class="movements__date">${formatMovementDate(
            movementDate,
            account.locale
          )}</div>
          <div class="movements__value">${formattedMovements}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function createUserNames(accounts) {
  accounts.forEach(
    account =>
      (account.userName = account.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
}

function calcPrintBalance(account) {
  account.balance = account.movements.reduce(
    (total, movement) => total + movement,
    0
  );
  labelBalance.textContent = formatCurrency(
    account.balance,
    account.locale,
    account.currency
  );
}

function calcDisplaySummary(account) {
  const depositAmount = account.movements
    .filter(movement => movement > 0)
    .reduce((result, movement) => result + movement, 0);
  // labelSumIn.textContent = `${depositAmount.toFixed(2)}€`;
  labelSumIn.textContent = formatCurrency(
    depositAmount,
    account.locale,
    account.currency
  );

  const withdrawalAmount = account.movements
    .filter(movement => movement < 0)
    .map(movement => Math.abs(movement))
    .reduce((result, movement) => result + movement, 0);
  // labelSumOut.textContent = `${withdrawalAmount.toFixed(2)}€`;
  labelSumOut.textContent = formatCurrency(
    withdrawalAmount,
    account.locale,
    account.currency
  );

  const interestAmount = depositAmount * account.interestRate * 0.01;
  // labelSumInterest.textContent = `${interestAmount.toFixed(2)}€`;
  labelSumInterest.textContent = formatCurrency(
    interestAmount,
    account.locale,
    account.currency
  );
}
function updateUI(currentAccount) {
  // display the resutls
  displayMovements(currentAccount);
  calcPrintBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}

function getDate(date) {
  return {
    day: `${date.getDate()}`.padStart(2, 0),
    month: `${date.getMonth() + 1}`.padStart(2, 0),
    year: date.getFullYear(),
    hour: `${date.getHours()}`.padStart(2, 0),
    min: `${date.getMinutes()}`.padStart(2, 0),
  };
}

function formatMovementDate(date, locale) {
  const daysPassed = Math.round(
    Math.abs(Date.now() - date) / (1000 * 60 * 60 * 24)
  );

  if (daysPassed === 0) return `Today`;

  switch (daysPassed) {
    case 0:
      return `Today`;
    case 1:
      return `Yesterday`;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return `${daysPassed} days ago`;
    default:
      return new Intl.DateTimeFormat(locale).format(date);
  }

  console.log(daysPassed);
}

function formatCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(Math.abs(value));
}

// Starting application
createUserNames(accounts);

// Faking always logged in

currentAccount = account1;
containerApp.style.opacity = 1;
updateUI(currentAccount);

// Handling Events

btnLogin.addEventListener('click', evnt => {
  evnt.preventDefault();
  // get and verify username and pin
  currentAccount = accounts.find(
    account => account.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // Display current date
    // const { day, month, year, hour, min } = getDate(new Date());
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
    const dateOptions = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    const userLocale = currentAccount.locale;
    labelDate.textContent = new Intl.DateTimeFormat(
      userLocale,
      dateOptions
    ).format(new Date());

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

  const amount = +inputTransferAmount.value;
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

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);

    inputTransferAmount.value = inputTransferTo.value = '';
    inputTransferAmount.blur();
    inputTransferTo.blur();
  }
});

btnLoan.addEventListener('click', evnt => {
  evnt.preventDefault();
  const loanAmount = Math.round(inputLoanAmount.value);

  if (
    loanAmount > 0 &&
    currentAccount.movements.some(movement => movement >= loanAmount * 0.1)
  ) {
    currentAccount.movements.push(loanAmount);
    currentAccount.movementsDates.push(new Date().toISOString());
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
    +inputClosePin.value === currentAccount.pin
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

btnSort.addEventListener('click', evnt => {
  evnt.preventDefault();

  isSorted = !isSorted;
  displayMovements(currentAccount, isSorted);
});

// Test Space
