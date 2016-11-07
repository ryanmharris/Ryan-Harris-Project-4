//create a lightbox
  //create overlay

var $overlay = $("<div id='overlay'></div>");
  
  //append the overlay to the body of the page
  
  $(".container").append($overlay);
  
//create a div element for the images, arrows, and close button

var $imgContainer = $("<div class='imgContainer'></div>");

  //append new div to the overlay

  $overlay.append($imgContainer);

//create javascript for images

var $image = $("<img class='lightboxImg' />");

  //append the image to the image container

  $imgContainer.append($image);

//create javascript for the image caption

var $caption = $("<p class='lightboxCaption'></p>");

  //append the caption to the overlay

  $overlay.append($caption);

//create arrows to switch between images

var $rightArrow = $("<span class='arrow'><a href='#' class='arrow' id='rightArrow'> > </a></span>");
var $leftArrow = $("<span class='arrow'><a href='#' class='arrow' id='leftArrow'> < </a></span>");

  //append arrows to the image container

  $imgContainer.append($rightArrow).append($leftArrow);

//create a close button for the overlay

var $close = $("<span><a href='#' class='close'> x </a></span>");

  //append the close to the image container

  $imgContainer.append($close);

//create click function that triggers the overlay

$(".gallery a").click(function(event){
    event.preventDefault();

  //when an image is clicked update the image to the full photo
  var $imgSource = $(this).attr("href");
  $image.attr("src", $imgSource);

  //when clicked also show the image caption
  var $captionText = $(this).attr("title");
  $caption.text($captionText);
  
  //add the class selected to the current image
  $(this).addClass("selected");
  
  //show the overlay
  $overlay.show();
  
});


//Define left arrow function
function prevImg() {
  var $prevImage = $(".selected").prev().attr("href");
  $image.attr("src", $prevImage);
  var $prevCaption = $(".selected").prev().attr("title");
  $caption.text($prevCaption);
  $(".selected").removeClass("selected").prev().addClass("selected");
}

//Define right arrow function
function nextImg() {
  var $nextImage = $(".selected").next().attr("href");
  $image.attr("src", $nextImage);
  var $nextCaption = $(".selected").next().attr("title");
  $caption.text($nextCaption);
  $(".selected").removeClass("selected").next().addClass("selected");
}

//call the arrow functions

$leftArrow.click(function(event){
  event.preventDefault();
  prevImg();
});

$rightArrow.click(function(event){
  event.preventDefault();
  nextImg();
});

//enable the close function
$(".close").click(function(event){
  event.preventDefault();
  $(".selected").removeClass("selected");
  $overlay.hide();
});

//Create a Search Function

function searchEngine() {
  $(".gallery a").hide();
  $(".gallery a").each(function() {
    var $img = $(this);
    var $title = $(this).attr("title").toUpperCase();
    var $search = $("#search_box").val().toUpperCase();
    
    if($title.indexOf($search) !== -1) {
      $img.fadeIn(600);
    }
  });
}

$("#search_box").keyup(searchEngine);







