//hw 1 (m.g)
function Human(name, lastname, age) {
    this.name = name
    this.lastname = lastname
    this.age = age
    this.printAbout = function() {
      console.log(`Person's name is: ${this.name}, 
      Person's lastname is: ${this.lastname}, Person's age is: ${this.age}`)
    }
}

let sandro = new Human("Mate", "Giorgelashvili", 16)
sandro.printAbout()



  

