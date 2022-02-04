var audio = new Audio("myvid");

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}

window.open(youtube.html);


/// slide show
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

$(document).ready(function () {
  var divs = $('.test');
  var dir = 'up'; // wheel scroll direction
  var div = 0; // current div
  $(document.body).on('DOMMouseScroll mousewheel', function (e) {
      if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
          dir = 'down';
      } else {
          dir = 'up';
      }
      // find currently visible div :
      div = -1;
      divs.each(function(i){
          if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
              div = i;
          }
      });
      if (dir == 'up' && div > 0) {
          div--;
      }
      if (dir == 'down' && div < divs.length) {
          div++;
      }
      //console.log(div, dir, divs.length);
      $('html,body').stop().animate({
          scrollTop: divs.eq(div).offset().top
      }, 200);
      return false;
  });
  $(window).resize(function () {
      $('html,body').scrollTop(divs.eq(div).offset().top);
  });
});
