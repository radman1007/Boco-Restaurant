/* -----------------------------------
    Table Of Content

    1. Header Background Image slide
    2. Datepicker
    3. Preloader
    4. ScrollIt
    5. Navbar
    6. Scroll to top    
    7. Menu filter 
    8. Contact Form
    

-----------------------------------------*/

/*---------- background image change fadeIn fadeOut animation ----------=*/
var bgImageArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
    base = "img/hero-",
    secs = 4;
bgImageArray.forEach(function(img) {
    new Image().src = base + img;
    // caches images, avoiding white flash between background replacements
});

function backgroundSequence() {
    window.clearTimeout();
    var k = 0;
    for (i = 0; i < bgImageArray.length; i++) {
        setTimeout(function() {
            document.getElementsByClassName('slideshow')[0].style.background = "url(" + base + bgImageArray[k] + ") no-repeat center center fixed";
            document.getElementsByClassName('slideshow')[0].style.backgroundSize = "cover";
            if ((k + 1) === bgImageArray.length) { setTimeout(function() { backgroundSequence() }, (secs * 2000)) } else { k++; }
        }, (secs * 2000) * i)
    }
}
backgroundSequence();

/*----------- Datepicker ------------*/
$(document).ready(function() {
  $("#date").datepicker({
      minDate: 0,
      maxDate: "+60D",
      numberOfMonths: 1,      
  });
});

/*--------------- Main js --------------- */
$(function () {
  "use strict";
  var wind = $(window);

  /*--------------- PRELOADER --------------- */
    // will first fade out the loading animation 
    $("#loader").fadeOut("slow", function(){

      // will fade out the whole DIV that covers the website.
      $("#preloader").delay(300).fadeOut("slow");

    }); 

  /*--------------- SCROLLIT --------------- */
  $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: 'swing', // the easing function for animation
      scrollTime: 600, // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: -70 // offste (in px) for fixed top navigation
  });

  /*--------------- NAVBAR --------------- */
  // Add navbar background color when scrolled
  $(window).scroll(function () {
      if ($(window).scrollTop() > 56) {
          $(".navbar").addClass("nav-scroll");
      } else {
          $(".navbar").removeClass("nav-scroll");
      }
  });

  // close navbar-collapse when a  clicked
  $(".navbar-nav a").on('click', function () {
      $(".navbar-collapse").removeClass("show");
  });

});

/*-------------- Scroll to top --------------=*/
$(document).ready(function () {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
          $('#gotop').fadeIn();
      } else {
          $('#gotop').fadeOut();
      }
  });
  // scroll body to 0px on click
  $('#gotop').click(function () {
      $('#gotop').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });
});

/*---------- Menu section filter -------------*/
$(".simplefilter li").on("click", function () {
  $(".simplefilter li").removeClass("active");
  $(this).addClass("active");
});
var options = {
  animationDuration: 0.6,
  filter: "all",
  callbacks: {
      onFilteringStart: function () { },
      onFilteringEnd: function () { }
  },
  delay: 0,
  delayMode: "alternate",
  easing: "ease-out",
  layout: "sameSize",
  selector: ".filtr-container",
  setupControls: true
};
var filterizd = $(".filtr-container").filterizr(options);
filterizd.filterizr("setOptions", options);

/*-------------- Contact form --------------*/
function validateForm() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var s = document.getElementById('subject').value;
    var m = document.getElementById('message').value;
    var onlyLetters =/^[a-zA-Z\s]*$/; 
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    if(n == "" || n == null){
        document.getElementById('nameLabel').innerHTML = ('Please enter your name');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
       
  
    if (!n.match(onlyLetters)) {
        document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
  
    if(e == "" || e == null ){
          document.getElementById('emailLabel').innerHTML = ('Please enter your email');
          document.getElementById('email').style.borderColor = "red";
          return false;
      }
  
    if (!e.match(onlyEmail)) {
        document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }
  
    if(s == "" || s == null ){
          document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
          document.getElementById('subject').style.borderColor = "red";
          return false;
      }
  
    if (!s.match(onlyLetters)) {
        document.getElementById('subjectLabel').innerHTML = ('Please enter only letters');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }
  
    if(m == "" || m == null){
        document.getElementById('messageLabel').innerHTML = ('Please enter your message');
        document.getElementById('message').style.borderColor = "red";
        return false;
    }
  
    else{
          return true;
      }      
};