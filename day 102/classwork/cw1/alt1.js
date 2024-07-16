let person1 = {
  name: "Sandro",
  lastname: "Zabakhidze",
  age: 16,
  occupation: "Programmer",
  hobbies: ["swimming", "football", "coding"],
  fullName: function() {
      return this.name + " " + this.lastname
  },

}

export { person1 };

