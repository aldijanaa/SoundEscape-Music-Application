/*******library.js********/
$(document).ready(function(){
    $("#button").click(function(){      /*jquery*/
        $(".sidebar").toggleClass("active");
  
         // Toggle button icon (to change the button once sidebar expanded)
         $(this).toggleClass("bx-menu bx-menu-alt-right");
    });
  });

  
// Get the Liked Songs section element
const likedSongsSection = document.getElementById('liked-songs-section');

// Add a click event listener to the Liked Songs section
likedSongsSection.addEventListener('click', function() {
  // Redirect to the likedsongs.html page
  window.location.href = 'likedsongs.html';
});
 
 
// Get the playlist box element
const brokenHeartPlaylist = document.getElementById('broken-heart-playlist');

// Add a click event listener to the playlist box
brokenHeartPlaylist.addEventListener('click', function() {
  // Redirect to the playlistoverview2.html page
  window.location.href = 'playlistoverview2.html';
});
