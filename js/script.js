/*******index.html********/
$(document).ready(function(){
  $("#button").click(function(){      /*jquery*/
      $(".sidebar").toggleClass("active");

       // Toggle button icon (to change the button once sidebar expanded)
       $(this).toggleClass("bx-menu bx-menu-alt-right");
  });
});
 

/*function applyBottomNavigationOnMobile() {
  if (window.innerWidth <= 768) {
    const sidebar = document.querySelector('.sidebar');
    const bottomNavigation = document.querySelector('.bottom-navigation');
    const homeContent = document.querySelector('.home_content');
    
    sidebar.style.display = 'none';
    bottomNavigation.style.display = 'flex';
    homeContent.style.paddingBottom = '60px';
  } else {
    const sidebar = document.querySelector('.sidebar');
    const bottomNavigation = document.querySelector('.bottom-navigation');
    const homeContent = document.querySelector('.home_content');
    
    sidebar.style.display = 'block';
    bottomNavigation.style.display = 'none';
    homeContent.style.paddingBottom = '30px';
  }
}*/

window.addEventListener('resize', applyBottomNavigationOnMobile);
applyBottomNavigationOnMobile();


//library.html
  // Get the Liked Songs section element
  const likedSongsSection = document.getElementById('liked-songs-section');

  // Add a click event listener to the Liked Songs section
  likedSongsSection.addEventListener('click', function() {
    // Redirect to the likedsongs.html page
    window.location.href = 'likedsongs.html';
  });





 


/****for now hide home content */
// Check if the screen width is less than or equal to 768px (mobile screens)
//if (window.matchMedia("(max-width: 768px)").matches) {
  // Hide the home content
  //document.querySelector(".home_content").style.display = "none";

  // Show the bottom navigation
 // document.querySelector(".bottom-navigation").style.display = "flex";
//}













/*const sidebar = document.querySelector('.sidebar');
const homeContent = document.querySelector('.home_content');
const searchContainer = document.querySelector('.search-container');
const searchBar = document.querySelector('.search-bar');

sidebar.addEventListener('click', function() {
  homeContent.classList.toggle('sidebar-active');
  if (homeContent.classList.contains('sidebar-active')) {
    searchBar.style.marginLeft = '40px';
    searchBar.style.alignItems = 'center';
  } else {
    searchBar.style.marginLeft = '70px';
    searchBar.style.alignItems = 'flex-start';
  }
});*/






//doesnt work yet
/*function menuBtnChange() {
  var button = $("#button");

  if ($(".sidebar").hasClass("active")) {
    button.removeClass("bx-menu").addClass("bx-menu-alt-right");
  } else {
    button.removeClass("bx-menu-alt-right").addClass("bx-menu");
  }
}*/



/*search*/
/*let inputBox = document.querySelector(".input-box"),
    search = document.querySelector(".search")

    search.addEventListener("click", () => inputBox.classList.add(inputBox)
    )*/








/*let button = document.querySelector("#button");
let sidebar = document.querySelector(".sidebar");

button.onclick = function(){
  sidebar.classList.toggle("active")
  menuBtnChange();
}

button.addEventListener("click", ()=>{
  sidebar.classList.toggle("active");
  menuBtnChange();//calling the function
});*/





/*novo*/
/*function checkLoginStatus() {
  // Check if the user is logged in or not
  var isLoggedIn = false;*/ // Replace with your actual login check

  /*if (!isLoggedIn) {
    // Display a message if the user is not logged in
    alert("You must be logged in to access the Library.");
  }
}*/


/*******landingpage.html   --- dodala u novi js*****/
/*this is for signup button*/
/*function redirectToSignUp() {
  window.location.href = "signup.html";
}

function buttonHover(button) {
  button.classList.toggle("hovered");
}

// Add the 'animate' class to the button after a delay (e.g., 1.9 seconds)
/*button animation*/
/*setTimeout(function() {
  const btnSignUp = document.getElementById('btn-signup');   /*bio je var umjesto const*/
  /*btnSignUp.classList.add('animate');
}, 1900);*/


