$(document).ready(function(){
    $("img").draggable();
    $(".left").droppable({
      accept: ".right",
      drop: function(event, ui) {
        
        var combinedImageUrl = "https://media.printables.com/media/prints/70102/images/764327_cfd3fbca-0d4f-497f-b837-a571c975ddc3/thumbs/inside/1280x960/jpg/large_display_s_7498044131362_70102.webp";
        $("body").css("background-image", "url('" + combinedImageUrl + "')");
      }
    });
  });