document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    var username = document.getElementById('username').value;
    var lastname = document.getElementById('lastname').value;
    
    // Save data to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('lastname', lastname);

    // Redirect to login page
    window.location.href = 'login.html';
});
