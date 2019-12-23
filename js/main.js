/* eslint-disable no-undef */
// (function ($) {
//     'use strict';

// $(window).load(function() {
//     $('#preloader-wrapper').fadeOut('slow');
// });

//     $('.gallery-slider').owlCarousel(
//         {
//         pagination : true,
//         autoPlay : 5000,
//         itemsDesktop  :  [1500,4],
//         itemsDesktopSmall :  [979,3]
//         }
//     );

//     // Gallery Popup
//     $('.image-popup').magnificPopup({type:'image'});

// })(jQuery);

$(document).ready(function () {

  var topoffset = 122;

  // Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=\\#]:not([href=\\#])').click(function () {
    if (location.pathname.replace(/^\//, '') ===
      this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - topoffset + 2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  $('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });
})
