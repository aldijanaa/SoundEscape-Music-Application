/*******index.html********/
$(document).ready(function(){
    $("#button").click(function(){      /*jquery*/
        $(".sidebar").toggleClass("active");
  
         // Toggle button icon (to change the button once sidebar expanded)
         $(this).toggleClass("bx-menu bx-menu-alt-right");
    });
  });
  

  $(document).ready(function() {
    const $artistFilter = $('#artist-filter');
    const $albumFilter = $('#album-filter');
    const $genreFilter = $('#genre-filter');
  
    const $artistContent = $('.artist-content');
    const $albumContent = $('.album-content');
    const $genreContent = $('.genre-content');
  
    function hideAllContent() {
      $artistContent.hide();
      $albumContent.hide();
      $genreContent.hide();
    }
  
    function removeActiveClass() {
      $artistFilter.removeClass('active');
      $albumFilter.removeClass('active');
      $genreFilter.removeClass('active');
    }
  
    function showArtistContent() {
      hideAllContent();
      removeActiveClass();
      $artistFilter.addClass('active');
      $artistContent.show();
    }
  
    function showAlbumContent() {
      hideAllContent();
      removeActiveClass();
      $albumFilter.addClass('active');
      $albumContent.show();
    }
  
    function showGenreContent() {
      hideAllContent();
      removeActiveClass();
      $genreFilter.addClass('active');
      $genreContent.show();
    }
  
    // Initial state
    hideAllContent();
  
    $artistFilter.on('click', showArtistContent);
    $albumFilter.on('click', showAlbumContent);
    $genreFilter.on('click', showGenreContent);
  });
  
// Get all filter buttons
//const filterButtons2 = document.querySelectorAll('.filter-button');

// Add click event listener to each button
//filterButtons2.forEach(button => {
  //button.addEventListener('click', () => {
    // Check if the clicked button is already active
    //const isActive = button.classList.contains('active');
    
    // Remove active class from all buttons
    //filterButtons2.forEach(btn => btn.classList.remove('active'));

   // if (!isActive) {
      // Add active class to the clicked button
     // button.classList.add('active');
   // }
    //else {
      // Remove active class from the clicked button
      //button.classList.remove('active');
      // Display the original content here
    //}
 // });
//});*/
