$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  });
});

// toggle menu/navbar script
$('.menu-btn').click(function () {
  $('.navbar .menu').toggleClass('active');
});

// typing animation script
var typed = new Typed('.typing', {
  strings: ['Pelajar', 'Developer', 'Gitaris'],
  typeSpeed: 100,
  backspeed: 60,
  loop: true,
});

var typed = new Typed('.typing-2', {
  strings: ['Pelajar', 'Developer', 'Gitaris'],
  typeSpeed: 100,
  backspeed: 60,
  loop: true,
});
