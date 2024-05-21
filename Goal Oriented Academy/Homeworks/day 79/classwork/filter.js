// function isEven(value) {
//     return value % 2 === 0;
// }

// const arr = [1, 2, 3, 4, 5];

// const result = arr.filter(isEven);

// console.log(result); // [2, 4]



const numbers = [-1, -4, 5, 7, 8];

const arr = [];

function isPositive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const value = numbers[i];
        if (value >= 0) {
            arr.push(value);
        }
    }
    console.log(arr);
}

isPositive(numbers);






// const newarr = numbers.filter(ispositive)


// console.log(newarr)
// console.log(filtered)
