// Function declarations and Arrow Functions:

// // 1. Write a function that takes two numbers and returns their sum.

// const addTwo = (num1, num2) => {
//     console.log(num1 + num2)
// }

// addTwo(1, 2)



// // 2. Create a function that accepts a string and returns the string reversed.
// const reversedString = (word) => {
//     let array = word.split('')
//     array.reverse()
//     let reversed = array.join('')
  
//     console.log(reversed); 
//   }
  
// reversedString('hello')
  

// // 3. Implement a function that checks if a given number is even.

// const evenChecker = (num) => {
//     let even = (num % 2 === 0) ? 'even' : 'odd'

//     console.log(even)
// }

// evenChecker(4)


// const evenChecker = (num) => {
//     if(num % 2 === 0){
//         console.log('even')
//     }else{
//         console.log('odd')
//     }
// }

// evenChecker(4)

// // 4. Write an arrow function that takes an array and returns its length.

// const arrayLength = (arr) => {
//     const length = arr.length

//     console.log(length)
// }

// arrayLength([1,2,8,7,8])

// // 5. Create an arrow function that calculates the area of a rectangle given its width and height.

// const rectangleArea = (w, l) => {
//     console.log(w * l)
// }

// rectangleArea(5, 6)

// // 6. Write a function that takes an array of numbers and returns a new array with each number doubled.
// function doubleArray(arr) {
//     console.log(arr.map(num => 
//         num * 2))
// }

// doubleArray([1,2,3,4])




// // 7. Implement a function that takes a string and returns it in uppercase.
// const upperCase = (word) => {
//     const upper = word.toUpperCase()

//     console.log(upper)
// }

// upperCase('hello')

// // // 8. Create an arrow function that filters out all odd numbers from an array.
// const filterOdd = (arr) => {
//     const filtered = arr.filter(num => num % 2 === 0)

//     console.log(filtered)
// }

// filterOdd([2,3,4,6,7,8,5])

// // 9. Write a function that accepts a number and returns its factorial.
// const factorialNum = (num) => {
//     if(num < 0){
//         return undefined
//     }

//     let result = 1
//     for (let i = 1; i <= num; i++) {
//       result *= i
//     }
//     console.log(result)
// }

// factorialNum(5)

// // 10. Create an arrow function that takes a string and returns the number of vowels in the string.

// const vowelCounter = (word) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     const letters = word.split('')
//     letters.forEach(letter => {
//         if (vowels.includes(letter)) {
//             count += 1
//         }
//     });

//     console.log(count)
// };

// vowelCounter('hello')





// Template Literals:

// // 1. Create a template literal that includes a variable in a sentence.
// const age = 6

// console.log(`your age is ${age}`)

// // // 2. Use a template literal to create a multiline string.

// console.log(`hello
// my
// name
// is`)

// // // 3. Write a template literal that embeds an expression to calculate the sum of two numbers.

// console.log(`sum of two numbers are ${10 + 5}`)

// // 4. Create a template literal to format a date using variables for day, month, and year.

// const currentDate = new Date()

// const currentMonth = currentDate.getMonth()
// const currentDay = currentDate.getDay()
// const currentYear = currentDate.getFullYear()

// console.log(`month: ${currentMonth}, day: ${currentDay}, year: ${currentYear}`)


// // 5. Use a template literal to construct a URL from variables for the protocol, domain, and path.

// const protocol = 'https'
// const domain = 'google.com'
// const path = '/api/data'

// const url = `${protocol}://${domain}${path}`

// console.log(url)


// // 6. Create a template literal that includes a conditional expression.
// // Variables
// const name = 'Sandro'
// const isLoggedIn = true

// const greeting = `Welcome${isLoggedIn ? ', ' + name : ''}!`

// console.log(greeting)


// // 7. Write a template literal that formats an address using variables for street, city, and zip code.


// const street = 'Khizanisvhili'
// const city = 'Tbilisi'
// const zipCode = '0133'


// const address = `${street}, ${city}, ${zipCode}`

// console.log(address)


// // 10. Write a template literal that interpolates a function call and includes its result in a sentence.


// function calculateArea(length, width) {
//     return length * width;
// }

// const length = 5
// const width = 10
// const area = calculateArea(length, width)

// const sentence = `The area of a rectangle with length ${length} and width ${width} is ${area}.`

// console.log(sentence)


// Short Conditionals:

// // 1. Use the `&&` operator to conditionally log a message if a variable is true.

// if(5 > 4 && 5 < 8){
//     console.log('success')
// }



// // 2. Use the `||` operator to set a default value for a variable if it is falsy.

// let main = sub || defaultValue;
 


// // 3. Use the ternary operator to assign a value based on a condition.
// let result = condition ? valueIfTrue : valueIfFalse;
 

// // 4. Write a short conditional using the `&&` operator to call a function only if a variable is not null.
// myVar && myFunction();


// // 5. Use the `||` operator to return the first truthy value from a list of variables.
// let firstName = ''
// let lastName = 'Doe'
// let nickname = 'JD'

// let displayName = firstName || nickname || lastName || 'Anonymous'

// console.log(displayName)

// // 6. Use the ternary operator to log different messages based on whether a number is positive or negative.

// const number = 5

// const positive = number >= 0 ? 'positive' : 'negative'

// console.log(positive)

// // 9. Use the ternary operator to set the value of a variable based on the length of a string.

// const str = "Hello World!"
// const result = (str.length > 10) ? "Long" : "Short"
// console.log(result)


// Array method map():

// // 1. Use the `map` function to create a new array with each element doubled.

// const array = [1,2,3,4,5,6]

// const arrayDoubled = []

// array.map((value)=>{
//     arrayDoubled.push(value*2)
// })

// console.log(arrayDoubled)

// // 2. Apply the `map` function to convert an array of strings to uppercase.

// const strings = ['sandro', 'giorgi', 'luka', 'misho']

// const stringsUpper = []

// strings.map((value)=>{
//     stringsUpper.push(value.toUpperCase())
// })

// console.log(stringsUpper)

// // 3. Use the `map` function to extract a specific property from an array of objects.
// const array = [1,2,3,4,5,6]

// const arraySpecific = []

// array.map((value)=>{
//     if(value > 3){
//         arraySpecific.push(value)
//     }else{'pass'}
// })

// console.log(arraySpecific)

// // 4. Implement the `map` function to add 5 to each element in an array of numbers.
// const array = [1,2,3,4,5,6]

// const arrayAddFive = []

// array.map((value)=>{
//     arrayAddFive.push(value+5)
// })

// console.log(arrayAddFive)

// // 5. Use the `map` function to convert an array of numbers to their square roots.
// const array = [1,2,3,4,5,6]

// const arrayRoot = []

// array.map((value)=>{
//     arrayRoot.push(Math.sqrt(value))
// })

// // console.log(arrayRoot)

// // 7. Use the `map` function to create a new array with the lengths of each string in an array of strings.
// const stringsArray = ["apple", "banana", "cherry"]

// const lengthsArray = stringsArray.map(string => string.length)

// console.log(lengthsArray);

// // 9. Use the `map` function to create an array of boolean values indicating whether each number in an array is even.
// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const isEvenArray = numbersArray.map(number => number % 2 === 0)

// console.log(isEvenArray)


// Array method filter():

// // 1. Use the `filter` function to create a new array with only even numbers.
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const evenNumbers = numbers.filter((num) => {
//     return num % 2 === 0
// })

// console.log(evenNumbers)

// // 2. Apply the `filter` function to extract all strings longer than 5 characters from an array.
// const strings = ['sandro', 'giorgi', 'nikolozi', 'mishiko', 'ana']

// const stringsMoreThenFive = strings.filter((str) => {
//     return str.length > 5
// })

// console.log(stringsMoreThenFive)

// 3. Use the `filter` function to create a new array with objects that have a specific property 
// value.

// let cars = [
//     { make: 'Honda', model: 'Civic', year: 2020 },
//     { make: 'Toyota', model: 'Corolla', year: 2019 },
//     { make: 'Honda', model: 'Accord', year: 2021 },
//     { make: 'Ford', model: 'Fusion', year: 2018 }
// ];


// let hondaCars = cars.filter(car => car.make === 'Honda')

// console.log(hondaCars)


// // 4. Implement the `filter` function to remove all null or undefined values from an array.

// function customFilter(array) {
//     return array.filter(item => item !== null && item !== undefined)
// }

// console.log(customFilter([1, null, 'hello', undefined, 5, null, 10]))


// // 5. Use the `filter` function to select all numbers greater than 10 from an array of numbers.
// const array = [1,2,3,66,6,67,12,31]

// const arrayMoreThanTen = array.filter((num)=> {
//     return num > 10
// })

// console.log(arrayMoreThanTen)

// // 6. Apply the `filter` function to create an array of words that start with a specific letter.
// const words = ['sandro', 'sosa', 'gio', 'spain']

// const wordsS = words.filter((word) => {
//     return word[0] === 's'
// })

// console.log(wordsS)

// // 7. Use the `filter` function to extract all prime numbers from an array of numbers.
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 === 0) return false;

//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) return false;
//     }

//     return true;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let primeNumbers = numbers.filter(isPrime);

// console.log(primeNumbers);


// // 8. Implement the `filter` function to create an array of users who are over a certain age from an 
// // array of user objects.
// const users = [
//     {name: 'sandro', age: 16},
//     {name: 'giorgi', age: 12},
//     {name: 'nikolozi', age: 15},
// ]

// const usersMoreThan13 = users.filter(user => user.age > 13);

// console.log(usersMoreThan13)

// // 9. Use the `filter` function to remove duplicate values from an array.
// let array = [1, 2, 3, 4, 2, 3, 5, 6, 1, 7, 8, 8, 9, 10]

// let uniqueArray = array.filter((value, index, self) => {
//     return self.indexOf(value) === index
// })

// console.log(uniqueArray)


// 




// Array method reduce():

// // 1. Use the `reduce` function to calculate the sum of an array of numbers.
// const numbers = [1,2,3,4,5,6]

// // let sum = 0

// // for(let i of numbers){
// //     sum += i
// // }

// // console.log(sum)

// const sum = numbers.reduce((accum, current) => {
//     return accum + current
// }, 0)

// console.log(sum)

// // 2. Apply the `reduce` function to concatenate an array of strings into a single string.
// const strings = ['sandro', 'giorgi', 'nikolozi']


// const concatenated = strings.reduce((accum, current) => {
//     return accum + current
// })

// console.log(concatenated)

// const numbers = [1, 2, 3, 4, 5, 6];

// const max = numbers.reduce((accum, current) => {
//     return Math.max(accum, current);
// }, 0);

// console.log(max)



// 5. Use the `reduce` function to calculate the total price of items in a shopping cart array.
// const numbers = [1,2,3,4,5,6]

// // let sum = 0

// // for(let i of numbers){
// //     sum += i
// // }

// // console.log(sum)

// const sum = numbers.reduce((accum, current) => {
//     return accum + current
// }, 0)

// console.log(sum)


// const numbers = [1, 2, 3, 4, 5, 6];

// const product = numbers.reduce((accum, current) => {
//     return accum * current;
// }, 1);

// console.log(product) 


// // 10. Apply the `reduce` function to create an array of unique values from an array with duplicates.const array = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArray = array.reduce((acc, currentValue) => {
//     if (acc.indexOf(currentValue) === -1) {
//         acc.push(currentValue);
//     }
//     return acc;
// }, [])

// console.log(uniqueArray)
