// //objects and dot notation
// const car = {
//     name: 'Fiat',
//     model: 500,
//     weight: 850,
//     color: 'White'
// }

// console.log(name)

// const person = {
//     name: 'luka',
//     lastname: 'tskhvaradze',
//     age: 17
// }






// //classwork 1
//obj me
// function modifyAndLog(object, dreamValue, propertyToDelete) {
//     object.dream = dreamValue; 
//     delete object[propertyToDelete]; 
//     console.log(object); 
// }

// const me = {
//     name: 'Sandro',
//     lastname: 'Zabakhidze',
//     age: 16,
//     hobby: 'coding',
//     academy: 'Goa'
// };

// modifyAndLog(me, 'machinelearning', 'lastname');

// const friend = {
//     name: 'Mate',
//     lastname: 'Giorgelashvili',
//     age: 15,
//     hobby: 'coding',
//     academy: 'Goa'
// };

// modifyAndLog(friend, 'softwareengineering', 'lastname');



//classwork 2
// Define the Car object
// const car = {
//     name: "Toyota",
//     model: "Camry",
//     weight: "1500kg",
//     start: function() {
//       return "Engine started!";
//     },
//     break: function(seconds) {
//       return `The car will break in ${seconds} seconds.`;
//    }
// };
  
// console.log("Car details:");
// console.log("Name:", car.name);
// console.log("Model:", car.model);
// console.log("Weight:", car.weight);
// console.log(car.start());
  
// car.weight = "1600kg";
  
// console.log("Modified car weight:", car.weight);
  
// for (let i = 5; i > 0; i--) {
//    console.log(car.break(i));
// }


// const car = {
//     name: "Honda",
//     model: "Velvo",
//     weight: "1500kg",
//     start: function() {
//       return "Car started!";
//     },
//     break: function(seconds) {
//       let output = "";
//       for (let i = seconds; i >= 0; i--) {
//         output += "Car will break in " + i + " second";
//         if (i !== 1) {
//           output += "s";
//         }
//         output += ". ";
//       }
//       return output;
//     }
//   };
  
// console.log("Initial car details:");
// console.log("Name:", car.name);
// console.log("Model:", car.model);
// console.log("Weight:", car.weight);
// console.log(car.start());

// car.start = function() {
//     return "Engine started!";
//   };

// car.weight = "1600kg";
  

// console.log("Modified car weight:", car.weight);
  
// console.log(car.break(5)); 


// const car = {
//     name: "Honda",
//     model: "Velvo",
//     miles: "1500km",
//     start: function() {
//       console.log("Car started!");
//     },
//     break: function(seconds) {
//       for (let i = seconds; i >= 0; i--) {
//         console.log("Car will break in " + i + " second");
//       }
//     }
//   }
  
// console.log("Initial car details:")
// console.log("Name:", car.name)
// console.log("model:", car.model);
// console.log("weight:", car.weight);
// car.start();

// car.start = function() {
//     console.log("engine started!")
//   };

// car.miles = "1600km";
// console.log("Modified car weight:", car.weight);
// car.break(5); 




