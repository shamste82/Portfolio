
$(document).ready(function() {

    $('.menu-title').addClass("animated bounceIn");

    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        $('.portfolio-image').addClass('animated bounceOutRight');
        $('.welcome-arrow-down').css('visibility', 'hidden');
        $('#welcome-heading').css('visibility', 'hidden');
    });

    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        $('.portfolio-image').removeClass('animated bounceOutRight');
        $('.portfolio-image').addClass('animated bounceInRight');
        $('#welcome-heading').css('visibility', 'visible');

    });

    // The arrow blinks when page2 is touched/hovered
    $('.page2').hover(function () {
        $('.div-arrow-right-img').css('visibility', 'visible');
        $('.div-arrow-right-img').addClass('animated flash');
        window.setTimeout(function () {
            $('.div-arrow-right-img').css('visibility', "hidden");
            $('.div-arrow-right-img').removeClass('animated flash');
        }, 2000);

    });

    // The arrow blinks when page3 is touched/hovered
    $('.page3').hover(function () {
        $('.arrow-right-mob').css('visibility', 'visible');
        $('.arrow-right-mob').addClass('animated flash');
        window.setTimeout(function () {
            $('.arrow-right-mob').css('visibility', "hidden");
            $('.arrow-right-mob').removeClass('animated flash');
        }, 2000);

    });

    // Hides the navbar when scrolling down.
    $(".navbar-fixed-top").autoHidingNavbar();

    // Calls the fullpage plugin
    $('#fullpage').fullpage({
        anchors:['section-welcome', 'section-about', 'section-projects', 'section-contact'],
        controlArrows: false,
        paddingTop: '0px',
    });



});


