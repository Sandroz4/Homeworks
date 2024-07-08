// // 1. Simple Fetch Request: Make a GET request to a public
// //  API (e.g., JSONPlaceholder) and log the response.

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=> console.log(res))

            
// // 2. Fetch with Then: Fetch data from an API and log the 
// // JSON response using .then().

// fetch('https://fakestoreapi.com/products/1')
//             .then((res) => {
//                 return res.json()
//             }).then((res) => {
//                 console.log(res)
//             })

// // 3. Handle Errors with Catch: Fetch data from an invalid 
// // URL and handle the error using .catch().


// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .catch(mes => console.log('error'))
//             .then(res => console.log(res))


// // 4. Finally Block: Make a fetch request and use .finally() 
// // to log a message that the request has completed.

// fetch('https://fakestoeapi.com/products/1')
//             .then(res=>res.json())
//             .catch(mes => console.log('error'))
//             .then(res => console.log(res))
//             .finally(fin => 
//                 console.log('done')
//             )


// // 5. Fetch and Display: Fetch data from an API and display 
// // it on a webpage.


// const img = document.getElementById('img')


// fetch('https://fakestoreapi.com/products/1')
//     .then((data) => data.json())
//     .then((data) => {
//         img.src = data.image
//     })



// // 6. Chaining Multiple Then: Fetch data and chain multiple 
// // .then() methods to process the data in stages.

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .catch(mes => console.log('error'))
//             .then(res => console.log(res))



// 7. Fetching Image: Fetch an image from a URL and display 
// it on the webpage.

// const img = document.getElementById('img')


// fetch('https://fakestoreapi.com/products/1')
//     .then((data) => data.json())
//     .then((data) => {
//         img.src = data.image
//     })


// 8. Delayed Fetch Request: Use setTimeout to delay a fetch 
// request by a few seconds.

// const img = document.getElementById('img')


// fetch('https://fakestoreapi.com/products/1')
//     .then((data) => data.json())
//     .then((data) => {
//         setTimeout(() => {
//             img.src = data.image
//         }, 2000)
//     })


// const img = document.getElementById('img')

// setTimeout(() => {
//     fetch('https://fakestoreapi.com/products/3')
//     .then((data) => data.json())
//     .then((data) => {
//         img.src = data.image
//     })
// }, 2000)


// // 9. Fetch and Delay JSON Parsing: Fetch data and use setTimeout
// //  to delay parsing the JSON response.


// const img = document.getElementById('img')

// fetch('https://fakestoreapi.com/products/1')
    // .then(response => {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(response.json())
    //         }, 2000)
    //     });
    // })
//     .then(data => {
//         img.src = data.image
//     })
//     .catch(error => {
//         console.error(error)
//     })



// // 10. Chained Delayed Fetch: Chain multiple fetch requests 
// // with setTimeout delays between them.


// fetch('https://fakestoreapi.com/products/1')
//             .then(response => {
//                 return new Promise(resolve => {
//                     setTimeout(() => {
//                         resolve(response.json())
//                     }, 2000)
//                 });
//             })
//             .catch(mes => console.log('error'))
//             .then(res => console.log(res))


// 11. Delayed Error Handling: Fetch data and use setTimeout 
// to delay error handling in .catch().



// // 12. Completion Log with Delay: Use setTimeout in .finally() 
// // to delay logging the completion message.
 
// fetch('https://fakestoreapi.com/products/1')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.error(error)
//     })
//     .finally(() => {
//         setTimeout(() => {
//             console.log('completed.')
//         }, 2000)
//     })


// // 13. Fetch and Alert: Fetch data from an API and show an alert 
// // with the fetched data after a delay using setTimeout.

// fetch('https://fakestoreapi.com/products/1')
//     .then(response => response.json())
//     .then(data => {
//         setTimeout(() => {
//             alert(`Fetched data: ${JSON.stringify(data)}`)
//         }, 3000)
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error)
//     })


// // 14. Fetch and Conditional Display: Fetch data from an API and 
// // display it on the webpage only if certain conditions are met, 
// // using setTimeout to delay the display.


// fetch('https://fakestoreapi.com/products/1')
//     .then(response => response.json())
//     .then(data => {
//         if (data.userId === 1) {
//             setTimeout(() => {
//                 document.getElementById('content').innerText = JSON.stringify(data)
//             }, 2000); 
//         } else {
//             console.log('Data not displayed due to conditions.')
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error)
//     })


 