// // 1. Define a class called Person with properties like name, age, and gender.

// class Person{
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender
//     }
// }

// 2. Create an object, using the Person class and assign it to a variable.

// class Person{
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender
//     }
// }

// const person2 = new Person('sandro', 16, 'male')


// // 3. Add methods to the Person class such as greet() to log a greeting.

// class Person{
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender
//     }

//     greet(){
//         console.log('hello' + this.name)
//     }
// }

// const person2 = new Person('sandro', 16, 'male')
// person2.greet()

// 4. Access and log the properties of an object created in task2.

// class Person{
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender
//     }
// }

// const person2 = new Person('sandro', 16, 'male')

// console.log(person2.name)
// console.log(person2.age)
// console.log(person2.gender)






// 5. Update the values of class properties in a new object.


// class Person{
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender
//     }
// }

// const person2 = new Person('sandro', 16, 'male')

// console.log(person2.name)
// console.log(person2.age)
// console.log(person2.gender)





// 6. Create multiple objects, using the Person class and assign them to variables.

// class Person{
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender
//     }
// }

// const person2 = new Person('sandro', 16, 'male')
// const person2 = new person('luka', 17, 'male')

// // 7. Define a getter method in a class that returns a specific property value.

// class Person{
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender
//     }

//     get(){
//         return this.name
//     }
// }

// const person2 = new Person('sandro', 16, 'male')
// const person3 = new person('luka', 17, 'male')

// // 8. Use a getter method to create a computed property that generates its value
// //  based on certain conditions or calculations.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

 
//     get canVote() {
//         return this.age >= 18;  
//     }
// }

 
// const person1 = new Person("John", 25);

 



// // 9. Define a setter method in a class that sets the value of a specific property.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.height = 0; 
//     }

//     set height(value) {
//         if (value > 0) {
//             this.height = value; 
//         } else {
//             console.log("Height must be a positive number.");
//         }
//     }

 
//     get height() {
//         return th
//     }
// }


// const person1 = new Person("Jane", 30);


// 10. Define a private property inside a class using the # prefix.

// class Account{
//     #password;

//     constructor(password, lastname){
//         this.#password = password;
//         this.lastname = lastname;
//     }

//     get password(){
//         return this.#password
//     }
// }

// const person1 = new Account('luka123', 'luka')

// console.log(person1.password)