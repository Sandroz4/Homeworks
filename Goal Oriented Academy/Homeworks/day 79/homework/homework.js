// 1. Transforming Data: Given an array of objects representing people 
// with their ages, use the map function to create a new array containing only 
// the names of these people.

const people = [
    {
        name:  "luka",
        age: 105
    },
    {
        name: "lile",
        age: 12
    },
    {
        name: 'sandro',
        age: 16
    }
]

const names = people.map(function(obj){
    return obj.name
})


console.log(names)



// 2. Prime or not: Given an array of numbers, use the map function to 
// create a new array where there would be two kind of values: True / False.
//  Add True to new array, if number is prime, else add False when number is composite.

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  const numbers = [2, 3, 4, 5, 10, 13, 15];
  const primeStatus = numbers.map(num => isPrime(num));
  console.log(primeStatus)
  




// 3. Filtering Data: Given an array of objects representing students wit
// h their grades, use the filter function to create a new array containing 
// only the students who passed the exam (i.e., whose grades are above a certain threshold).


const students = [
    { name: "sandro", grade: 85 },
    { name: "luka", grade: 58 },
    { name: "sandro", grade: 93 },
    { name: "luka", grade: 45 }
  ];
  
  const passingGrade = 60;
  const passedStudents = students.filter(student => student.grade > passingGrade);
  console.log(passedStudents);

  


// // 5. Create a copy function of map.
// function manuaMap(subFunc, arr){
//     const newArr = []
//     for(let i = 0; i < arr.length; i++){
//         newArr.push(subFunc(arr[i]))
//     }

//     return newArr
// }


// function addTwo(value){
//     return value + 2
// }


// const result = manuaMap(addTwo, [1,2,3,4,5])

// console.log(result)


// // 6. Create a copy function of filter.
// function manualFilter(predicateFunc, arr) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (predicateFunc(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// function isEven(value) {
//     return value % 2 === 0;
// }

// const result = manualFilter(isEven, [1, 2, 3, 4, 5]);

// console.log(result); // [2, 4]
