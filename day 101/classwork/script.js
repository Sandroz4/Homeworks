// function greet(name){
//     console.log(name)
// }

// const greet = function (name){
//     console.log(name)
// }

// // greet('luka')
// console.dir(greet)

// function greet(name)
// arguments: null
// caller: null
// length: 1
// name: "greet"
// prototype: Object { … }
// const greet = (name) => {
//     console.log('hello', name)
// }

// greet('sandro')


// const numbers = [5, 6, 7, 8, 9];
// let list = []

// numbers.forEach((num) => {
//     list.push(num);
// });


// console.log(list);

//template literals

// const name = 'sandro'

// // // console.log('my name is', name)
// // console.log(`my name is ${name}`)
// // console.log(`my name is ${100 + 100}`)

// // 'name' && console.log(name)

// // if(10 > 5 && 10 > 20){
// //     console.log('success')
// // }

// // if(10 > 5 || 10 > 20){
// //     console.log('success')
// // }

// // logs 0, because name is a falsy value
// console.log(Boolean(name))



// let name = null
// console.log(name)

// const age = 19;
// const isAdult = age >= 18 

// console.log(isAdult)

// const ages = [12, 13, 14, 15, 16, 17, 34, 35, 36];

// const newObj = ages.map((age) => ({
//     age,
//     isAdult: age >= 19 ? 'yes' : 'no'
// }));

// console.log(newObj)

// const names = ['luka','lile','nia']

// const upperNames = names.map((name) => name.toUpperCase())


// console.log(upperNames)

// const ages = [12,15,18,16,17,21,25]

// const adult = ages.filter((age) => age >= 18)

// console.log(adult)



// const ages = [12,15,18,16,17,21,25]

// const adult = ages.reduce((preValue, curValue) => preValue + curValue, 0)

// console.log(adult)

// //property shorthand

// const name = 'Luka'
// const position = 'Mentor'

// const myObj = {
//     name,
//     position
// }

// console.log(myObj)

// const myInfo = {
//     name: 'luka',
//     lastname: 'tskhvaradze'
// }

// // const name = myInfo.name

// // console.log(myInfo)

// const {lastname} = myInfo

// console.log(lastname)


const person = {
    info: 'cool',
    name: 'sandro'
}

// module.exports = person

export default person