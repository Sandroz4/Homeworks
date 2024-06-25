// const person1 = {
//     firstname: 'luka',
//     lastname: 'tskhvaradze',
//     email: 'lcxvaradze400@gmail.com',
//     id: 1
// }

// class Person1 {
//     constructor(firstname, lastname){
//         this.firstname = firstname,
//         this.lastname = lastname
//     }

//     printInfo(){
//         console.log(this.firstname, this.lastname)
//     }
// }

// const person2 = new Person1('sandro', 'zabakhidze')

// person2.printInfo()


// class Person1{
//     constructor(name, lastname){
//         this.name = name,
//         this.lastname = lastname
//     }

//     printInfo(){
//         console.log(this.name, this.lastname)
//     }
// }


// const person2 = new Person1('gio', 'zabakhidze')

// person2.printInfo()



// class person1{
//     constructor(name, lastname){
//         this.firstname = name,
//         this.lastname = lastname
//     }

//     set changeName(name){
//         this.firstname = name;
//     }
// }


// person1.changeName = 'luka'

// console.log(person1.name)



//lukas example


// class Account{
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     set changeName(name){
//         this.firstname = name
//     }

//     get info(){
//         return this.lastname
//     }
// }

// const person1 = new Account('sandro', 'zabakhidze')

// person1.changeName = 'zura'
// // console.log(person1.firstname, person1.lastname)
// console.log(person1.info)



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