// 1. Sum of Array Elements: Write a function that takes an array of numbers 
// as input and returns the sum of all the elements using forEach.


function sumArray(arr) {
    let sum = 0;

    arr.forEach(function(value) {
        sum += value;
    })

    return sum
}


const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); 

