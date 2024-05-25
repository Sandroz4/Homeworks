document.getElementById('sign-up').addEventListener('click', signUp);
document.getElementById('login-form').addEventListener('submit', signIn);
document.getElementById('withdraw-btn').addEventListener('click', withdrawMoney);
document.getElementById('deposit-btn').addEventListener('click', depositMoney);

let users = [];
let loggedInUserIndex = -1;


function signUp() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  

  users.push({ username, password, balance: 0});
  alert('Sign up successful! You can now log in.');
}


function signIn(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  

  const userIndex = users.findIndex(user => user.username === username && user.password === password);
  
  if (userIndex !== -1) {
    loggedInUserIndex = userIndex;
    document.getElementById('user-greeting').innerText = username;
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.bank').style.display = 'block';
    displayBalance();
  } else {
    alert('Invalid username or password. Please try again.');
  }
}


function withdrawMoney() {
  const amount = parseFloat(prompt('Enter amount to withdraw:'));
  if (isNaN(amount) || amount <= 0) {
    alert('Invalid amount. Please enter a valid number.');
    return;
  }
  const currentUser = users[loggedInUserIndex];
  if (amount > currentUser.balance) {
    alert('Insufficient funds.');
    return;
  }
  currentUser.balance -= amount;
  displayBalance();
  alert(`Successfully withdrew $${amount}.`);
}


function depositMoney() {
  const amount = parseFloat(prompt('Enter amount to deposit:'));
  if (isNaN(amount) || amount <= 0) {
    alert('Invalid amount. Please enter a valid number.');
    return;
  }
  const currentUser = users[loggedInUserIndex];
  currentUser.balance += amount;
  displayBalance();
  alert(`Successfully deposited $${amount}.`);
}


function displayBalance() {
  const currentUser = users[loggedInUserIndex];
  document.getElementById('amount-of-money').innerText = `Balance: $${currentUser.balance.toFixed(2)}`;
}
