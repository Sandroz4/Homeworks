// დავალება:

// // 1. შექმენით map-ის კოპიო ფუნქცია სახელად manualMap

// // 1 manual map function




// //                addTwo [1,2,3,4,5]
// function manuaMap(subFunc, arr){
//     const newArr = []
//     for(let i = 0; i < arr.length; i++){
// //                  addTwo  [1,2,3,4,5][i]
//         newArr.push(subFunc(arr[i]))
//     }

//     return newArr
// }


// function addTwo(value){
//     return value + 2
// }

// //                      ფუნქცია  მასივი
// const result = manuaMap(addTwo, [1,2,3,4,5])

// console.log(result)


// // 2. შექმენით filter-ის კოპიო ფუნქცია სახელად manualFilter
// // 1 manualfilter


// //                    isEven   [1, 2, 3, 4, 5]
// function manualFilter(subFunc, arr) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
// //          isEven([1, 2, 3, 4, 5][i])
//         if (subFunc(arr[i])) {
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










// 3. თქვენ გადმოგეცემათ სახელების სია. დავალებაა, რომ დააბრუნოთ 
// ახალი სია, სადაც ყველა სიტყვა იქნება capitalize ვარიანტში, გამოიყენეთ map.


// function capitalizeNames(names){
//     return names.map(function(name){
//         let firstLetter = name.charAt(0).toUpperCase();
//         let restWord = name.slice(1).toLowerCase();

//         return firstLetter + restWord
//     })
// }


// console.log(capitalizeNames(['alice', 'bob', 'charlie', 'dave'])); 

// function capitalizeNames(names) {
//     return names.map(function(name) {
//       let firstLetter = name.charAt(0).toUpperCase();
//       let restName = name.slice(1).toLowerCase();

//       return firstLetter + restName;
//     });
//   }
  

// console.log(capitalizeNames(['alice', 'bob', 'charlie', 'dave'])); 


// function capitalize(names){
//     return names.map(function(name){
//         let firstLetter = name.charAt(0).toUpperCase();
//         let restName = name.slice(1).toLowerCase()

//         return firstLetter + restName
//     })
// }


// console.log(capitalize(['alice', 'bob', 'charlie', 'dave'])); 










  
// // 4. თქვენ გადმოგეცემათ სახელების სია. დავალებაა, რომ დააბრუნოთ ახალი
// //  სია, სადაც გექნებათ მარტო ის სახელები, რომლებიც იწყებიან დიდი ასოთი და მათი სიგრძე არ აღემატება 5-ს.




// const names = ['sandro', 'Luka', 'Giorguna', 'Nikolozi'];


// function capitalizeFive(names){
//     return names.filter(function(name){
//         const firstLetter = name.charAt(0);
//         const firstLetterUppercase = firstLetter === firstLetter.toUpperCase()

//         let length = name.length

//         return firstLetter && length > 5
//     })
// }

// const res = capitalizeFive(names);
// console.log(res);


// const names = ['sandro', 'Luka', 'Giorguna', 'Nikolozi'];

// function capitalizeFive(names){
//     return names.filter(function(name){
//         const firstLetter = name.charAt(0);
//         const firstLetterUppercase = firstLetter === firstLetter.toUpperCase();
//         let length = name.length;

//         return firstLetterUppercase && length > 5;
//     });
// }

// const res = capitalizeFive(names);
// console.log(res);












// // 5. თქვენ გადმოგეცემათ მთელი რიცხვების სია. დავალებაა, რომ დააბრუნოთ 
// // ახალი სია, სადაც იქნება მარტო 20-ზე მეტი 5-ის ჯერადები.



// const numbers = [5,10,15,20,25,30]
// let newArr = []

// function fiveMoreTwenty(arr){
//     arr.filter(function(num){
//         if(num > 20 && num % 5 === 0){
//             newArr.push(num)
//         }
//     });
// }


// fiveMoreTwenty(numbers);

// console.log(newArr);




// const numbers = [5, 10, 20, 25, 30];
// let newArr = [];

// function fiveMoreTwenty(arr) {
//     arr.filter(function(num) {
//         if (num > 20 && num % 5 === 0) {
//             newArr.push(num);
//         }
//     });
// }

// fiveMoreTwenty(numbers);

// console.log(newArr);
