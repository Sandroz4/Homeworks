//1
let isSunny = true;
let isWarm = true;
let hasRaincoat = false;


if (isSunny && isWarm) {
  console.log("It's a warm.");
} else {
  console.log("It is not not be a warm day.");
}

if (isSunny || hasRaincoat) {
  console.log("You're prepared for the weather.");
} else {
  console.log("Bring an umbrella.");
}





//2
function multiply(a, b) {
    return a * b;
  }
  
  let result = multiply(5, 3);
  console.log(result)


function greet(name) {
  return "Hello, " + name + "!";
}

let greeting = greet("Sandro");
console.log(greeting); 

function isEven(number) {
    return number % 2 === 0;
  }
  
  let checkEven = isEven(6);
  console.log(checkEven); 



//3
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));


if (!isNaN(num1) && !isNaN(num2)) {
    let sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
} else {
    console.log("Invalid input!");
}
