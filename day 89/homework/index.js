// const numbers = [1, 5, 8, 4, 9, 3, 10];

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// const lastPrimeIndex = numbers.lastIndexOf(numbers.find(function(val) {
//     return isPrime(val);
// }));
// console.log(lastPrimeIndex);


// // Function hoisting
// const sum = computeSum([1, 2, 3]);
// console.log(sum);

// function computeSum(arr) {
//     return arr.reduce(function(accum, curr) {
//         return accum + curr;
//     }, 0);
// }


// // Variable hoisting 
// console.log(num);
// let num = 5;


// // Template literals
// console.log(`Number is ${num}`);


// // for-in loop for indices
// for (const idx in numbers) {
//     console.log(idx);
// }


// // for-of loop for values
// for (const val of numbers) {
//     console.log(val);
// }


