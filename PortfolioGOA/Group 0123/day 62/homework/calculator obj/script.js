const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    },
    multiply: function(num1, num2) {
        return num1 * num2;
    },
    divide: function(num1, num2) {
        if (num2 === 0) {
            return "Cannot be divide by zero";
        } else {
            return num1 / num2;
        }
    }
};

console.log(calculator.add(5, 3));      
console.log(calculator.subtract(10, 4)); 
console.log(calculator.multiply(2, 6));  
console.log(calculator.divide(15, 3));  
console.log(calculator.divide(8, 0));   
