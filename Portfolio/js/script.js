setInterval(function() {
    var borderWidth = document.documentElement.clientWidth;
    document.querySelector('.wrapper1-triangle').style.borderRight = borderWidth + 'px solid transparent';
    document.querySelector('.wrapper3-triangle').style.borderLeft = borderWidth + 'px solid transparent';
    element = borderWidth + 'px solid transparent';
}, 50);

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 50) {
        document.querySelector('.header').style.height = '40px';
        document.querySelector('.header').style.opacity = '0.6';
    }
    if (scrolled < 50) {
        document.querySelector('.header').style.height = '60px';
        document.querySelector('.header').style.opacity = '1';
    }
};

$(document).ready(function() {

    // $('.jcarousel')
    //     .on('jcarousel:create jcarousel:reload', function() {
    //         var element = $(this),
    //             width = element.innerWidth();
    //         element.jcarousel('items').css('width', width + 'px');
    //     })
    //     .jcarousel({
    //         // Your configurations options
    //         wrap: 'both',
    //         animation: 'slow'
    //     });
    //
    // $('.jcarousel-prev').jcarouselControl({
    //     target: '-=1'
    // });
    //
    // $('.jcarousel-next').jcarouselControl({
    //     target: '+=1'
    // });

});
