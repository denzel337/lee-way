

var $overlay = $('<div id ="overlay"></div');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);



$("#gradgallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);

  $overlay.show();

var captionText = $(this).children("img").attr("alt");

$caption.text(captionText);
})

$overlay.click(function(){

  $(overlay).hide();
});



  $(document).ready(function() {
    $('.menu_pics').hide().delay(800).fadeIn(3000);
});

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
