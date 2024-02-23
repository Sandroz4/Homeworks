function userInfo(Name, Email, Password) {
    this.name = Name;
    this.email = Email;
    this.password = Password;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () {
      submitForm();
    });
  });
  
  function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var userInfo1 = new userInfo(name, email, password);
  
    displayUserInfo(userInfo1);
  }
  
  function displayUserInfo(userInfo) {
    var userInfoDisplay = document.getElementById('userInfoDisplay');

    var userInfoHTML = '<h3>User Information:</h3>';
    userInfoHTML += '<p><strong>Name:</strong> ' + userInfo.name + '</p>';
    userInfoHTML += '<p><strong>Email:</strong> ' + userInfo.email + '</p>';
    userInfoHTML += '<p><strong>Password:</strong> ' + userInfo.password + '</p>';

    userInfoDisplay.innerHTML = userInfoHTML;
  }