// // 2 Find Index of User with Admin Role: Retrieve the index of the
// //  user object in an array with the role of 'admin'.

// function findAdminIndex(users) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id === 'admin') {
//             return i;
//         }
//     }
//     return 'admin was not found'; 
// }


// const users = [
//     { age: 16, name: 'Sandro', id: 'user' },
//     { age: 22, name: 'Zurabi', id: 'admin' },
//     { age: 12, name: 'Giorgi', id: 'user' },
// ]


// console.log(findAdminIndex(users))

// // 3 Find Index of First Overdue Item: Identify the index of the 
// // first item in a list with an overdue property set to true.


// function findFirstOverdueIndex(items) {
//     for (let i = 0; i < items.length; i++) {
//         if (items[i].overdue === true) {
//             return i;
//         }
//     }
//     return 'no overdue item found'
// }

// // Example usage:
// const items = [
//     { name: 'item1', overdue: false },
//     { name: 'item2', overdue: true },
//     { name: 'item3', overdue: false },
// ];
 
// console.log(findFirstOverdueIndex(items))


// // 4 Find Index of Product Out of Stock: Search for the index of
// //  the first product object in an array with an inStock property set to false.


// function findOutOfStockIndex(products) {
//     for (var i = 0; i < products.length; i++) {
//         if (products[i].inStock === false) {
//             return i
//         }
//     }
//     return 'item not in stock'
// }

// const products = [
//     { name: 'product1', inStock: true },
//     { name: 'product2', inStock: false },
//     { name: 'product3', inStock: true },
// ];
 
// console.log(findOutOfStockIndex(products))
