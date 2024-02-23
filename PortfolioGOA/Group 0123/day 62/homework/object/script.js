// Create an object named person with properties name, age, and city.
// Access the name property of the person object you created in the previous exercise.
// Change the age property of the person object to a new value.
// Add a new property named country to the person object and set its value.
// Add a method named greet to the person object that logs a greeting message including the person's name.
// Create two objects with the same properties and values. Use the === operator to compare them. Log the result.
const person1 = {
    name: 'Sandro',
    lastname: 'Zabakhidze',
    age: 16,
    city: 'Tbilisi',
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person1.country = 'Georgia';

const person2 = {
    name: 'Sandro',
    lastname: 'Zabakhidze',
    age: 17,
    city: 'Sachkere',
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person2.country = 'Georgia';

console.log(person1 === person2); 



//Create an object named school with properties name and students, where students is an array of objects 
// representing student names and ages. Access a student's name and age from the school object.
const school = {
    name: "Example School",
    students: [
        { name: "John", age: 15 },
        { name: "Emily", age: 16 },
        { name: "Michael", age: 14 }
    ]
};

const studentName = school.students[0].name;
const studentAge = school.students[0].age;

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
