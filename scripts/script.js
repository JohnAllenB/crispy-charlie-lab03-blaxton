$(document).ready(function(){
    $("img").draggable();
    $(".left").droppable({
      accept: ".right",
      drop: function(event, ui) {
        
        var combinedImageUrl = "https://c.tenor.com/Ogqj5PL-m9sAAAAC/tenor.gif";
        $("body").css("background-image", "url('" + combinedImageUrl + "')");
      }
      
    });
  });

  function reset() {
    location.reload();
  }
  