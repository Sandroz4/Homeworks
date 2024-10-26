class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
    }
}

const dataBase = [];

function updateDatabaseOutput() {
    const databaseOutput = document.getElementById('databaseOutput')
    databaseOutput.textContent = JSON.stringify(dataBase, null, 2)
}


document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault()

    const firstName = document.getElementById('name').value
    const lastName = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const newPerson = new Person(firstName, lastName, email)


    dataBase.push(newPerson)
    updateDatabaseOutput()
    document.getElementById('dataForm').reset()
});




