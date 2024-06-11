// some

// // 1 Has Passing Grades: Check if some grades in an array are above a passing level.


// const grades = [100, 200, 200, 210, 120, 230]


// function abovePassing(grade){
//     return grade >= 200
// }

// console.log(grades.some(abovePassing))

// // 2 Contains Admin Users: Verify if some user objects in an array have the role of 'admin'.

// const users = [
//     { age: 16, name: 'Sandro', role: 'user' },
//     { age: 22, name: 'Zurabi', role: 'admin' },
//     { age: 12, name: 'Giorgi', role: 'user' },
// ];

// function isAdmin(user) {
//     return user.role === 'admin'
// }

// console.log(users.some(isAdmin))


// // 4 Includes Prime Numbers: Check if some numbers in an array are prime numbers.

// const numbers = [4, 6, 8, 9, 10, 11];

// function isPrime(num) {
//     if (num <= 1) return false
//     if (num <= 3) return true
    
//     if (num % 2 === 0 || num % 3 === 0) return false
    
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false
//     }
//     return true;
// }

// console.log(numbers.some(isPrime))


