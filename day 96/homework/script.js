// // 1. Create a simple Promise that resolves after 2 seconds with 
// // the message "Task 1 complete".

// const resolvePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Task 1 complete');
//     }, 2000);
// });

// resolvePromise.then(message => {
//     console.log(message)
// })



// // 2. Create a Promise that rejects immediately with an error message
// //  "Task 2 failed". Handle the rejection using .catch.

// const rejectPromise = new Promise((resolve, reject) => {
//     reject('Task 2 failed')
// })


// rejectPromise.catch(message => {
//     console.log(message)
// })




// // 3. Create a Promise that resolves with a number (e.g., 5). Chain a
// //  .then handler to double the number and return it, then chain another 
// //  .then handler to log the doubled number.

 
// const promise = new Promise((resolve) => {
//     resolve(5);  
//   });
  
//   promise
//     .then((number) => {
//       return number * 2 
//     })
//     .then((doubledNumber) => {
//       console.log("doubled number:", doubledNumber) 
//     });
  



// // 4. Create a function that returns a Promise which resolves after 2 
// // seconds with a message "First". Chain another then that waits 1 second 
// // before logging "Second".

// function delayedPromise(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('first')
//         }, 2000)
//     })
// }


// delayedPromise().then((message) => {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('second')
//         }, 1000)
//     })
// })
// .then((message)=>{
//     console.log(message)
// })



// // 5. Create a Promise which rejects after 2 seconds
// //  with an error message "Task 3 failed". Handle the rejection with a .catch 
// //  to log the error message.

// const resolvePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('task 3 failed');  
//     }, 2000);  
// });

// resolvePromise.catch((error)=>{console.log('error: ', error)})




// // 7. Create a function that returns a Promise which resolves after a random 
// // delay between 1 and 3 seconds with the message "First". Chain another .then
// //  that waits for another random delay between 1 and 3 seconds before logging "Second".

// function randomDelayPromise(){
//     const delay = Math.floor(Math.random()*3000) + 1000

//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve('first')
//         }, delay)
//     })
// }

// randomDelayPromise()
//    .then((message) => {
//     console.log(message)
//     const secondDelay = Math.floor(Math.random()*3000) + 1000

//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve('second')
//         }, secondDelay)
//     }).then((message)=>{
//         console.log(message)
//     })
//    })



// // 8. Create a function that returns a Promise which rejects after a random 
// // delay between 1 and 4 seconds with an error message "Task 3 failed". Handle
// //  the rejection with a .catch to log the error message.


// function randomDelay(){
//     return new Promise((resolve, reject)=>{
//         const delay = Math.floor(Math.random()*4000) + 1000

//         setTimeout(()=>{
//             reject('task 3 failed')
//         }, delay)
//     })
// }

// randomDelay().catch((error)=>{
//     console.log(error)
// })

 




// // 9. Create a function that returns a Promise which resolves after a random 
// // delay between 0 and 5 seconds with the message "Task 1 complete" if the random 
// // number is greater than 0.5, otherwise, it should resolve with the message "Task 1 was quick".

// function randomDelay(){
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random()*5000)  

//         if(delay >= 1000){
//             resolve('Task 1 complete')
//         }
//         else{
//             resolve('task 1 was quick')
//         }

//     })
// }


// randomDelay().then(message => {
//     console.log(message)
// })









// // // 10. Create a function that returns a Promise which resolves after a random 
// // // delay between 1 and 4 seconds. If the random number is less than 0.3, reject 
// // // with an error message "Task 3 failed". Otherwise, resolve with the message 
// // // "Task 3 complete". Handle the rejection with a .catch to log the error message.


// function randomDelay() {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4000);

//         if (delay <= 1000) {
//             reject('task 3 failed');
//         } else {
//             resolve('task 3 complete');
//         }
//     });
// }

// randomDelay()
//     .catch(error => {
//         console.log(error);  
//         throw error;  
//     })
//     .then(res => {
//         console.log(res);  
//     })
//     .catch(error => {
//         console.error('Something went wrong:', error);  
//     });

function getRandomIntInclusive(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
let delay = getRandomIntInclusive(1, 5) * 1000


console.log(delay)


// // 11. Create three Promises that resolve with different messages 
// // ("Promise 1", "Promise 2", "Promise 3") after 1, 2, and 3 seconds respectively.
// //  Use Promise.all to log all messages once all Promises are resolved.

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise 1')
//     }, 1000)
// })

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise 2')
//     }, 2000)
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise 3')
//     }, 10000)
// })

// Promise.all([firstPromise, secondPromise, thirdPromise])
//     .then(values => {
//         console.log(values)
//     })
//     .catch(error => {
//         console.log(error)
//     })


// // 12. Create three Promises that resolve with different messages after random 
// // delays between 1 and 5 seconds. Use Promise.all to log all messages once all 
// // Promises are resolved.


// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise 1')
//     }, delay)
// })

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise 2')
//     }, delay)
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise 3')
//     }, delay)
// })

// Promise.all([firstPromise, secondPromise, thirdPromise])
//     .then(values => {
//         console.log(values)
//     })
//     .catch(error => {
//         console.log(error)
//     })


// // 13. Create three Promises where one of them rejects after 2 seconds with an 
// // error message "Promise failed". Use Promise.all to handle the rejection and 
// // log the error message.


// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise 1')
//     }, delay)
// })

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject('Promise failed')
//     }, delay)
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('Promise 3')
//     }, delay)
// })

// Promise.all([firstPromise, secondPromise, thirdPromise])
//     .then(values => {
//         console.log(values)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// git add .
// git commit -m "commit"
// git push

// 14. Create three Promises that resolve or reject based on random conditions. 
// Use Promise.all to log all resolved messages or handle the rejection.

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(delay <= 1000){
//             resolve('hello')
//         }
//         else{
//             reject('bad')
//         }
//     }, delay)
// })

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(delay <= 3000){
//             resolve('hello')
//         }
//         else{
//             reject('bad')
//         }
//     }, delay)
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(delay > 4000){
//             resolve('hello')
//         }
//         else{
//             reject('bad')
//         }
//     }, delay)
// })

// Promise.all([firstPromise, secondPromise, thirdPromise])
//     .then(values => {
//         console.log(values)
//     })
//     .catch(error => {
//         console.log(error)
//     })


// 15. Create three Promises that resolve with numbers after random delays. Use 
// Promise.all to get the results, then chain another .then to calculate and log the sum of the numbers.

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(5)
//     }, delay)
// })

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(56)
//     }, delay)
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(7)
//     }, delay)
// })

// Promise.all([firstPromise, secondPromise, thirdPromise])
//     .then(values => {
//         let sum = 0
//         for(let i = 0; i<values.length;i++){
//             sum+=values[i]
//         }
//         console.log(sum)
//     })
//     .catch(error => {
//         console.log(error)
//     })


// // 16. Create three Promises that resolve with different messages 
// // ("Promise 1", "Promise 2", "Promise 3") after 1, 2, and 3 seconds respectively.
// //  Use Promise.race to log the message from the first Promise that resolves.

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('promise 1')
//     }, 1000)
// })

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('promise 2')
//     }, 2000)
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('promise 3')
//     }, 3000)
// })

// Promise.race([firstPromise, secondPromise, thirdPromise])
//     .then(values => {
//         console.log(values)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// // 17. Create three Promises that resolve with different messages after random delays
// //  between 1 and 5 seconds. Use Promise.race to log the message from the first Promise that resolves.

// const firstPromise = new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random()*5000) 
//     setTimeout(()=>{
//         resolve('promise 1')
//     }, delay)
// })

// const secondPromise = new Promise((resolve, reject) => {
//     const delay1 = Math.floor(Math.random()*5000) 
//     setTimeout(()=>{
//         resolve('promise 2')
//     }, delay1)
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     const delay2 = Math.floor(Math.random()*5000) 
//     setTimeout(()=>{
//         resolve('promise 3')
//     }, delay2)
// })

// Promise.race([firstPromise, secondPromise, thirdPromise])
//     .then(values => {
//         console.log(values)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// 18. Create three Promises where one of them resolves immediately with the message 
// "Instant Promise". Use Promise.race to log the message from the first Promise that resolves.

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('promise 1')
//     })
// })

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('promise 2')
//     })
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('promise 3')
// })

// Promise.race([firstPromise, secondPromise, thirdPromise])
//     .then(values => {
//         console.log(values)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// // 19. Create three Promises where one of them rejects after 2 seconds with an error
// //  message "Promise failed". Use Promise.race to handle the resolution or rejection 
// //  and log the result or error.

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject('promise 1')
//     })
// })

// const secondPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject('promise 2')
//     }, 2000)
// })

// const thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject('promise 3')
//     })
// })

// Promise.race([firstPromise, secondPromise, thirdPromise])
//     .then(values => {
//         console.log(values)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// // 20. Create three Promises that resolve based on random conditions 
// // (e.g., if a random number is greater than 0.5, resolve with a message; otherwise, 
// //     resolve after 2 seconds with a different message). Use Promise.race to log the
// //      message from the first Promise that resolves.
// const firstPromise = new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 5000);
//     setTimeout(() => {
//         if (delay <= 2000) {
//             resolve('mes1');
//         } else {
//             reject('mes2');
//         }
//     }, delay);
// });

// const secondPromise = new Promise((resolve, reject) => {
//     const delay1 = Math.floor(Math.random() * 5000);
//     setTimeout(() => {
//         if (delay1 <= 3000) {
//             resolve('mes1');
//         } else {
//             reject('mes2');
//         }
//     }, delay1);
// });

// const thirdPromise = new Promise((resolve, reject) => {
//     const delay2 = Math.floor(Math.random() * 5000);
//     setTimeout(() => {
//         if (delay2 <= 3000) {
//             resolve('mes1');
//         } else {
//             reject('mes2');
//         }
//     }, delay2);
// });

// Promise.race([firstPromise, secondPromise, thirdPromise])
//     .then(winner => {
//         console.log('The first resolved promise:', winner);
//     })
//     .catch(error => {
//         console.log('The first rejected promise:', error);
//     });


// // 21. Fetch data from a URL and log the response to the console.
// const obj = fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))

    
// // 22. Fetch data from an API and display it on a web page.

// const p = document.getElementById('title')
// const img = document.getElementById('product-img')
// const price = document.getElementById('price')


// const obj = fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json())
//     .then(data => {
//         p.textContent = data.title
//         img.src = data.image
//         price.textContent = data.price 
//         img.width = 200
//     })
//     .catch(err => console.log(err))


// 23. Fetch JSON data from an API and display specific information
// (e.g., title, description) on a webpage.
// const obj = fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))


// // 25. Fetch image URLs from an API and display them on a webpage.

// function fetchAndUpdateImage(url, imgElement) {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             imgElement.src = data.image;
//             imgElement.width = 300;
//         })
//         .catch(err => console.log(err));
// }

// const img = document.getElementById('product-img');
// const img2 = document.getElementById('product-img2');

// fetchAndUpdateImage('https://fakestoreapi.com/products/1', img);
// fetchAndUpdateImage('https://fakestoreapi.com/products/3', img2);
