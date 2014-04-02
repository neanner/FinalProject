//when the window loads
$(window).load(function(){
  //get the width of all images
  var totalWidth = 132;
  /*i set the variable of totalWidth to 132 because my last image was not fitting in-line with the others inside the div .imagewindow when it was set to 0. 132 was the number of pixels that
  needed to be added to the width in order for the last image to be inline with the others. There must be a better way to fix this, any pointers?*/
  $('.imagewindow img').each(function(){
    var thisImgWidth = $(this).width();
    totalWidth += thisImgWidth;
  });
  $('.imagewindow').css({'width':totalWidth});
});

$('.toggleMenu').on('click', function(){
    $('.menu ul').toggleClass('show');
});