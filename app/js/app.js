
$(document).ready(function() {

    // Makes it navigation friendly for desktop
    if((window.screen.availWidth > 1279) && (window.screen.availHeight > 799) )
    {
        $('#fullpage').fullpage({
            anchors:['section-welcome', 'section-about', 'section-projects', 'section-contact'],
            controlArrows: true,
            navigation: false,
            slidesNavigation: false,
            paddingTop: '0px'
        });

    }

    // Makes it navigation friendly for tablet
    else if((window.screen.availWidth > 750) && (window.screen.availHeight > 920) ||
        (window.screen.availWidth > 1000) && (window.screen.availHeight > 660)) {
        $('#fullpage').fullpage({
            anchors: ['section-welcome', 'section-about', 'section-projects', 'section-contact'],
            controlArrows: false,
            navigation: true,
            slidesNavigation: true,
            paddingTop: '0px'
        });

        //Mobile navigation
    } else {
        $('#fullpage').fullpage({
            anchors:['section-welcome', 'section-about', 'section-projects', 'section-contact'],
            controlArrows: false,
            navigation: false,
            slidesNavigation: false,
            paddingTop: '0px'
        });

    }

    //Animation for mobile version
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

    // The arrow blinks when page2 is touched/hovered (mobile)
    $('.page2').hover(function () {
        $('.div-arrow-right-img').css('visibility', 'visible');
        $('.div-arrow-right-img').addClass('animated flash');
        window.setTimeout(function () {
            $('.div-arrow-right-img').css('visibility', "hidden");
            $('.div-arrow-right-img').removeClass('animated flash');
        }, 2000);

    });

    // The arrow blinks when page3 is touched/hovered (mobile)
    $('.page3').hover(function () {
        $('.arrow-right-mob').css('visibility', 'visible');
        $('.arrow-right-mob').addClass('animated flash');
        window.setTimeout(function () {
            $('.arrow-right-mob').css('visibility', "hidden");
            $('.arrow-right-mob').removeClass('animated flash');
        }, 2000);

    });

    // Hides the navbar when scrolling down. (mobile)
    $(".navbar-fixed-top").autoHidingNavbar();


});


