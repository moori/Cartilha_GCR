$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: '.navbar', offset: 50});

  // Add smooth scrolling on all links inside the navbar
  $('#bs-example-navbar-collapse-1 a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 50
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  $('#backToTop a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  repositionTopNavBar();
  // $('#fixedMenu').on('scroll', function(event){
  $(document).scroll(function(event){
    repositionTopNavBar();
  });

  // $("a[data-toggle='collapse']").on("click", function(){
  //   $(this).prev().css()
  // });

  $('.dropdown-menu li a').on('click', function(){
    retractMenu();
  });

});

function retractMenu(){
  console.log('banana');
    $('#bs-example-navbar-collapse-1').css('height', '1px');
    $('#bs-example-navbar-collapse-1').attr('aria-expanded', 'false');
    $('#bs-example-navbar-collapse-1').removeClass( 'in' );
}

function repositionTopNavBar(){
  var offset = 172-$(window).scrollTop();
  if(offset < 0){
    offset=0;
  }
 $('#fixedMenu').css({ top: offset });
}