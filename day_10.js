'use strict';

// Some
const arr = [1, 2, 3, 4, -5];

console.log(arr.includes(-1));
console.log(arr.includes(1));
console.log(arr.includes(0));

console.log(arr.some(a => a < 0));

// Every

console.log(arr.every(a => a > 0));
console.log(arr.every(a => Math.abs(a) > 0));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.sort());
console.log(movements.sort((a, b) => b - a));
