
/*******landingpage.html*****/
function redirectToSignUp() {
  window.location.href = "signup.html";
}

function buttonHover(button) {
  button.classList.toggle("hovered");
}

// Add the 'animate' class to the button after a delay (e.g., 1.9 seconds)
/*button animation*/
setTimeout(function() {
  var btnSignUp = document.getElementById('btn-signup');  
  btnSignUp.classList.add('animate');
}, 1900);
 