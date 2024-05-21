// 1 manualfilter


function manualFilter(predicateFunc, arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (predicateFunc(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function isEven(value) {
    return value % 2 === 0;
}

const result = manualFilter(isEven, [1, 2, 3, 4, 5]);

console.log(result); // [2, 4]
