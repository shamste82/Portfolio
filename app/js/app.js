
$(document).ready(function() {


    $('.menu-title').addClass("animated bounceIn");

    $('.dropdown').on('show.bs.dropdown', function(e){
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        $('.portfolio-image').addClass('animated bounceOutRight');
        $('.welcome-arrow-down').css('visibility', 'hidden');
    });
        //$('.portfolio-image').hide();


      $('.dropdown').on('hide.bs.dropdown', function(e){
     $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
          $('.portfolio-image').removeClass('animated bounceOutRight');
          $('.portfolio-image').addClass('animated bounceInRight');
      });

    $('.portfolio-image').hover(function(){
        $('.welcome-arrow-down').css('visibility', 'visible');
        $('.welcome-arrow-down').addClass('animated flash');
        window.setTimeout( function(){
                $('.welcome-arrow-down').removeClass('animated flash');
            }, 2000);

    });



});


