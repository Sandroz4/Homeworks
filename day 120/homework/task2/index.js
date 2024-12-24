import {calculator, filter} from './module.js'

calculator(4, 2, "+");
calculator(8, 6, "-");
calculator(3, 4, "*");
calculator(10, 5, "/");

console.log(filter([1,2,3,4,5,6,7], (num) => {
    return num > 5;
}));