export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`my name is ${this.name} and I am ${this.age} years old.`);
    }
}