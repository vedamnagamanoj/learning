// Exporting Module
console.log(`Exporting Module`);

// Blocking code

// console.log(`Start fetching users`);

// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log(`finished fetching `);

const shoppingCart = 10;
export const cart = [];
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product}, ${quantity}`);
}

const totalPrice = 230;
const totalQuantity = 15;

export { totalPrice as price, totalQuantity as quantity };
