// 1 manualfilter


//                    isEven   [1, 2, 3, 4, 5]
function manualFilter(subFunc, arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
//          isEven([1, 2, 3, 4, 5][i])
        if (subFunc(arr[i])) {
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
