document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value
let confirmPassword = document.getElementById("confirmPassword").value
    
if (password === confirmPassword) {
    const account = {
    username: username,
    email: email,
    password: password
};
    console.log("Account created successfully:", account);
}   else {
    alert("Passwords do not match. Please try again.");
}
})
  