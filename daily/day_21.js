// Importing Module
// import { totalPrice as price, quantity, addToCart } from './shoppingCart.js';

// import * as ShoppingCart from './shoppingCart.js';
console.log('Importing Module');
import addToCart, { price, quantity, cart } from './shoppingCart.js';

// console.log(cart);

addToCart('bread', 5);
addToCart('roti', 45);
addToCart('paneer', 250);
console.log(price);
console.log(quantity);
console.log(cart);

// console.log(`start await`);
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log(`done await`);

async function getLastPost() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
}

// const lastPost = getLastPost();

// lastPost.then(last => console.log(last));
// // console.log(lastPost);

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity}, ${product} added to cart, with shipping cost of ${shippingCost}`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity}, ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// ShoppingCart2.addToCart('apples', 1);
// ShoppingCart2.addToCart('oranges', 1);
// console.log(ShoppingCart2.cart);
// console.log(ShoppingCart2);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
    { product: 'burger', quantity: 2 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
// console.log(stateClone);
// console.log(stateClone);

const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
// state.user.loggedIn = false;
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'Hey';

  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('Test').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polyfilling async functions
import 'regenerator-runtime/runtime';
