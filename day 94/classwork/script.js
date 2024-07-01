// const promise = new Promise((resolve, reject) => {

// });

// console.log(promise)

// const inventory = {
//     sunglasses: 1900,
//     pants: 100,
//     bags: 89
// }


// const myExecutor = (resolve,reject) => {
//     if(inventory.sunglasses > 0) resolve('sunglasses order processed');
//     else reject('item is sold ou')
// }

// const orderSunglasses = () => {
//     return new Promise(myExecutor)
// }

// const orderPromise = new Promise(myExecutor)

// console.log(orderPromise)


// const pantsCount = 1000

// const myFirstPromise = new Promise((resolve, reject) => {
//     if(pantsCount > 0){
//         resolve('You can purchase')
//     } else{
//         reject('Pants are sold out')
//     }
// })

// console.log(myFirstPromise)

  
// const subCount = 600

// const subPromise = new Promise((resolve, reject) => {
//     if(subCount > 40){
//         resolve('you are above 40')
//     }else{reject('sadly you are not famous')}
// })

// console.log(subPromise)

// console.log('start');


// //ასინქრონიზირებული ოპერაცია
// setTimeout(() => {
//     console.log('Opaa')
// }, 1000);


// console.log('end');


// const age = 18


// const agePomise = new Promise((resolve, reject) => {
//     if(age > 16){
//         resolve('u are allowed to drink')
//     }else{reject('u are a minor')}
// })

// // console.log(agePomise)

// // setTimeout(()=>{
// //     console.log('helloo')
// // }, 2000)

// // console.log('lol')



// const pantsCount = 100;

// const executorFunction = (resolve, reject) => {
//     if (pantsCount > 50) {
//         setTimeout(() => { resolve('pants are available') },1000);
//     } else {
//         setTimeout(() => { reject('pants are sold out') },1000);
//     }
// }

// const orderPants = () => {
//     return new Promise(executorFunction);
// }

// orderPants().then((resolved)=>{
//     console.log(resolved)
// }, (rejected)=>{
//     console.log(rejected)
// })



// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('you walk the dog');
//         }, 1500);
//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('you clean the kitchen');
//         }, 2500);
//     });
// }

// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('you take out the trash');
//         }, 500);
//     });
// }

// walkDog()
//     .then(value => {
//         console.log(value);
//         return cleanKitchen();
//     })
//     .then(value => {
//         console.log(value);
//         return takeOutTrash();
//     })
//     .then(value => console.log(value));
