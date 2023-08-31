
/***********************************************signup.html*************************/
const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');  /*register link on LOG IN page*/
const loginLink = document.querySelector('.login-link');  /*login link on SIGN UP page*/

const signupForm = document.querySelector('.form-box.register');
const loginForm = document.querySelector('.form-box.login');

/************************************************************************* */
// Display the sign-up form by default
signupForm.style.display = 'block';
loginForm.style.display = 'none';

/*register link*/
registerLink.onclick = () => {
  wrapper.classList.add('active');
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
};
 
/*log in link*/
loginLink.onclick = () => {
    wrapper.classList.remove('active');
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  };

  /*Form validation - SIGN UP*/
  const signupFormElement = document.getElementById('signup-form');
  const emailInput = document.querySelector('.form-box.register input[type="text"]');
  const usernameInput = document.querySelector('.form-box.register input[type="password"]');
  const passwordInput = document.querySelector('.form-box.register input[type="password"]');
  const agreeCheckbox = document.querySelector('.form-box.register input[type="checkbox"]');

  const errorMessage = document.getElementById('error-message');
  
  signupFormElement.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Check if all fields are filled
    if (emailInput.value === '' || usernameInput.value === '' || passwordInput.value === '' || !agreeCheckbox.checked) {
      // Display error message
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'Please fill in all the required fields and agree to the terms and conditions.';
      errorMessage.style.display = 'block';
    } else {
      // All fields are filled, redirect to the application or perform further actions
      window.location.href = 'homepage.html'; /*ovdje treba welcome screen onaj biti*/
    }
  });


  /*Form validation - LOGIN */
  const loginFormElement = document.getElementById('login-form');
const loginEmailInput = document.querySelector('.form-box.login input[type="email"]');
const loginPasswordInput = document.querySelector('.form-box.login input[type="password"]');

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const email = loginEmailInput.value;
  const password = loginPasswordInput.value;

  // Perform login validation here, such as checking if the email and password are correct
  const isValidLogin = validateLogin(email, password);

  if (isValidLogin) {
    // Successful login, redirect to the application or perform further actions
    window.location.href = 'application.html';
  } else {
    // Invalid login, display error message
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Invalid email or password.';
    errorMessage.style.display = 'block';
  }
});

function validateLogin(email, password) {
  if (email.trim() === '' || password.trim() === '') {
    return false;
  }

  return email === 'user@example.com' && password === 'password';
}






/*function changeForm() {
  const signupForm = document.getElementById("signup-form");
  signupForm.innerHTML = "<h3>Thank you for signing up!</h3>";
}*/

/*let button = document.querySelector(".btn1");
button.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
});*/


/*const loginButton = document.querySelector('.form-box.login .btn1');

loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Perform your login validation and processing here
  // For simplicity, let's assume the login is successful

  // Redirect to index.html
  window.location.href = 'index.html';
});*/

function redirectToSignUp() {
  window.location.href = "homepage.html"; 
}

/*treba isto ovo dodati za button sign up ali to ce biti novi fajl gdje se bira 
10 artista koje ce slusati*/
/*** .btn1 = SIGNUP
 *    .btn2 = LOG IN
 */
