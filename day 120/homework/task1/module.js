const calculator = (num1, num2, operator) => {
    if(operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 - num2)
    } else if (operator === "*") {
        console.log(num1 * num2)
    } else if (operator === "/") {
        console.log(num1 / num2);
    } else {
        console.log("Invalid operation");
    }
};

const filter = (arr, callback) => {
    let resArr = [];

    for(const value of arr){
        if(callback(value)) {
            resArr.push(value);
        }
    }
    return resArr;
}

module.exports.calculator = calculator;
module.exports.filter = filter;
