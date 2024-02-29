//primitive values 

// const x = 10;

// let y = x;

// console.group(y)


//not primitive 

// const x = {
//     name: 'luka',
//     age: 17
// };

// const y = x 

// y.name = 'lukaaa'


// console.log(x)


// //1 Object 
// const object = {
//     //ჩაშენებული ობიექტი
//     builtInObject: {
//         date: 24,
//         age: 15,
//         array: [5, 6, 9],
//       },
//     //მეთოდი
//     method: function() {
//       return "hello.";
//     },
//     //კუთვნილებები
//     belongings: {
//       bel1: "dog",
//       bel2: "cat"
//     }
// };
  
// //2 პრიმიტიული მნიშვნელობა/primitive value
// const primitiveValue = "Hello, world!";
  
// //3 #მიმთითებელი ტიპი/reference value
// const referenceValue = [1, 2, 3, 4, 5];


  


// Constructor 
function Flight(flightEncr, flightStat) {
    this.flightEncr = flightEncr;
    this.flightStat = flightStat;
}

// Creating Flight objects
const flight1 = new Flight("ABC123", "On time");
const flight2 = new Flight("XYZ789", "On time");
const flight3 = new Flight("DEF456", "On time");




