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

btnSort.addEventListener('click', evnt => {
  evnt.preventDefault();

  isSorted = !isSorted;
  displayMovements(currentAccount, isSorted);
});
