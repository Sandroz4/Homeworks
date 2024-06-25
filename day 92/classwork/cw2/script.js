// const signUpForm = document.getElementById('signup');
// const signInForm = document.getElementById('signin');

// const dataBase = [];

// class Account {
//     #password;

//     constructor(email, password) {
//         this.email = email;
//         this.#password = password;  
//     }

//     get password() {
//         return this.#password;
//     }
// }

// signUpForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = signUpForm.elements['email'].value;
//     const password = signUpForm.elements['password'].value;

//     dataBase.push(new Account(email, password));

//     alert('Account successfully created');
// });

// signInForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = signInForm.elements['email'].value;
//     const password = signInForm.elements['password'].value;

//     const acc = dataBase.find((obj) => obj.email === email);

//     if (acc && acc.password === password) {
//         alert('Successfully signed in');
//     } else {
//         alert('Invalid email or password');
//     }
// });
