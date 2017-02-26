$(document).ready(function() {

    $(function() {
        $('.jcarousel').jcarousel({
            // Configuration goes here
            animation: 'slow'
        });

        $('.jcarousel-prev').jcarouselControl({
            target: '-=1'
        });

        $('.jcarousel-next').jcarouselControl({
            target: '+=1'
        });

        $('.jcarousel-prev').on('click', function() {
            $('.resume-language:first').removeClass('resume-language_left');
            $('.resume-language:last').addClass('resume-language_right');
        });

        $('.jcarousel-next').on('click', function() {
            $('.resume-language:first').addClass('resume-language_left');
            $('.resume-language:last').removeClass('resume-language_right');
        });

    });

    function show(page) {
        $(page).find('.flyout__text').slideDown(500);
        $(page).find('.flyout__plus').addClass('flyout_hide');
        $(page).find('.flyout__minus').removeClass('flyout_hide');
    }

    function hide(page) {
        $(page).find('.flyout__text').slideUp(500);
        $(page).find('.flyout__plus').removeClass('flyout_hide');
        $(page).find('.flyout__minus').addClass('flyout_hide');
    }

    $('.jcarousel-next').click(function() {
        setTimeout(function() {
            hide('.en');
        }, 500);
        show('.ru');
    });

    $('.jcarousel-prev').click(function() {
        setTimeout(function() {
            hide('.ru');
        }, 500);
        show('.en');
    });

    hide('.ru');

    $('.show-all:first').click(function() {
        show('.en');
    });

    $('.hide-all:first').click(function() {
        hide('.en');
    });

    $('.show-all:last').click(function() {
        show('.ru');
    });

    $('.hide-all:last').click(function() {
        hide('.ru');
    });

    $('.flyout__head').click(function() {
        $(this).next('.flyout__text').slideToggle(500);
        $(this).children('.flyout__plus').toggleClass('flyout_hide');
        $(this).children('.flyout__minus').toggleClass('flyout_hide');
        return false;
    });

});
