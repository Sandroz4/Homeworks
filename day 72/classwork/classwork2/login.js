document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;
    
    // Retrieve data from local storage
    var storedUsername = localStorage.getItem('username');
    var storedLastname = localStorage.getItem('lastname');

    // Check if entered credentials match stored data
    if (enteredUsername === storedUsername && enteredPassword === storedLastname) {
        document.getElementById('login-message').innerText = "Welcome, " + storedUsername;
    } else {
        document.getElementById('login-message').innerText = "Account does not exist";
    }
});
