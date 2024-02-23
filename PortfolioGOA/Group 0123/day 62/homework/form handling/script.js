document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const errors = [];

    if (username.length < 5) {
        errors.push('Username must be at least 5 characters long');
    }

    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }

    if (errors.length === 0) {
        const userData = {
            username,
            password
        };

        console.log(userData); 
    } else {
        alert(errors.join('\n')); 
    }
});
