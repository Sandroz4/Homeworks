document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault()

    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value

    var fullNameContainer = document.getElementById('fullName')
    fullNameContainer.textContent = 'Full Name: ' + firstName + ' ' + lastName

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
});
