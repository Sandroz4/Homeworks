// 3. Calculate Product of Array Elements: Write a function that takes an array of 
// numbers as input and returns the product of all the elements using reduce.
function calculateProductOfArrayElements(arr) {
    const product = arr.reduce(function(accumulator, currentValue) {
        return accumulator * currentValue;
    }, 1);
    return product;
}

const numbers = [1, 2, 3, 4, 5];
console.log(calculateProductOfArrayElements(numbers));
