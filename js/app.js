
$(document).ready(function() {

    // Makes it navigation friendly for desktop
    if((window.screen.availWidth > 1279))
    {
        $('#fullpage').fullpage({
            anchors:['section-welcome', 'section-about', 'section-projects', 'section-contact'],
            controlArrows: true,
            navigation: true,
            slidesNavigation: false,
            paddingTop: '0px',
        });

    }

    // Makes it navigation friendly for tablet
    else if((window.screen.availWidth > 768)){
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
            slidesNavigation: true,
            paddingTop: '0px'
        });

    }

    //Animation for mobile version
    $('.menu-title').addClass("animated bounceIn");

    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        $('.portfolio-image').addClass('animated bounceOutRight');
        $('#welcome-heading').css('visibility', 'hidden');
    });

    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        $('.portfolio-image').removeClass('animated bounceOutRight');
        $('.portfolio-image').addClass('animated bounceInRight');
        $('#welcome-heading').css('visibility', 'visible');

    });
});


