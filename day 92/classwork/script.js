// const person1 = {
//     firstname: 'luka',
//     lastname: 'tskhvaradze',
//     email: 'lcxvaradze400@gmail.com',
//     id: 1
// }

class Person1 {
    constructor(firstname, lastname){
        this.firstname = firstname,
        this.lastname = lastname
    }

    printInfo(){
        console.log(this.firstname, this.lastname)
    }
}

const person2 = new Person1('sandro', 'zabakhidze')

person2.printInfo()