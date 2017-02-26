$(document).ready(function() {

    $(function() {
        $('.slider-jcarousel')
            .on('jcarousel:create jcarousel:reload', function() {
                var element = $(this),
                    width = element.innerWidth();
                element.jcarousel('items').css('width', width + 'px');
            })
            .on('jcarousel:createend', function() {
                // Arguments:
                // 1. The method to call
                // 2. The index of the item (note that indexes are 0-based)
                // 3. A flag telling jCarousel jumping to the index without animation
                $(this).jcarousel('scroll', 1, false);
            })
            .jcarousel({
                // Configuration goes here
                wrap: 'both',
                animation: 'slow'
            });

        $('.slider-jcarousel-pagination').jcarouselPagination({
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            })
            .on('jcarouselpagination:active', 'a', function() {
                $('.slider-jcarousel-pagination>a').removeClass('active');
                $(this).addClass('active');
            });
        // .on('jcarouselpagination:inactive', 'a', function() {
        //     $(this).removeClass('active');
        // });

        $('.slider-jcarousel-pagination a').eq(1).addClass('active');

        $(function() {
            $('.slider-jcarousel').jcarousel({
                // Core configuration goes here
            });

            $('.slider-jcarousel-prev').jcarouselControl({
                target: '-=1'
            });

            $('.slider-jcarousel-next').jcarouselControl({
                target: '+=1'
            });
        });
    });


    $(function() {
        $('.testimonial-jcarousel')
            .on('jcarousel:create jcarousel:reload', function() {
                var element = $(this),
                    width = element.innerWidth();
                element.jcarousel('items').css('width', width + 'px');
            })
            .on('jcarousel:createend', function() {
                // Arguments:
                // 1. The method to call
                // 2. The index of the item (note that indexes are 0-based)
                // 3. A flag telling jCarousel jumping to the index without animation
                $(this).jcarousel('scroll', 1, false);
            })
            .jcarousel({
                // Configuration goes here
                wrap: 'both',
                animation: 'slow'
            });

        $('.testimonial-jcarousel-pagination').jcarouselPagination({
                'item': function(page, carouselItems) {
                    return '<li><a href="#' + page + '">Page ' + page + '</a></li>';
                }
            })
            .on('jcarouselpagination:active', 'li', function() {
                $(this).children('a').addClass('active');
            })
            .on('jcarouselpagination:inactive', 'li', function() {
                $(this).children('a').removeClass('active');
            });


        $('.testimonial-jcarousel-pagination li a').eq(1).addClass('active');

    });


});
