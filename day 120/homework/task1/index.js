const modFunctions = require('./module');

modFunctions.calculator(4, 2, "+");
modFunctions.calculator(8, 6, "-");
modFunctions.calculator(3, 4, "*");
modFunctions.calculator(10, 5, "/");

console.log(modFunctions.filter([1,2,3,4,5,6,7], (num) => {
    return num > 5;
}));