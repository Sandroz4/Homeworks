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
