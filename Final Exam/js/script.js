$(document).ready(function() {

    $(function() {
        $('.steps-jcarousel').jcarousel({
            // Configuration goes here
            wrap: 'both',
            animation: 'slow'
        });

        $(function() {
            $('.steps-jcarousel').jcarousel({
                // Core configuration goes here
            });

            $('.steps-jcarousel-prev').jcarouselControl({
                target: '-=1'
            });

            $('.steps-jcarousel-next').jcarouselControl({
                target: '+=1'
            });
        });

    });

    function apiImageFound(e, input) {
        var API_KEY = '4569977-ace956fd1ad420b3085f6dfce';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(input) + "&orientation=horizontal&min_width=620&min_height=310&per_page=7";
        $.getJSON(URL, function(data) {
            if (parseInt(data.totalHits) > 0)
                $.each(data.hits, function(i, hit) {
                    var imgClass = '.ideas__img' + i;
                    var textClass = '.ideas__header' + i;
                    var link = hit.webformatURL;

                    $(imgClass).attr('src', link);
                    $(textClass).text(hit.tags);
                });
            else
                $('.ideas__no-found').fadeIn(400);
            setTimeout(function() {
                $('.ideas__no-found').fadeOut(400);
            }, 2000);
        });
    }

    $('.ideas__input').keyup(function() {
        if (event.keyCode === 13) {
            clearInterval(pictureChange);
            var input = $('.ideas__input').val();
            apiImageFound(undefined, input);
        }
    });

    $('.partners__find').on('click', function(e) {
        clearInterval(pictureChange);
        var input = $('.ideas__input').val();
        apiImageFound(e.preventDefault(), input);
    });


    function randomWord() {
        i = Math.floor(Math.random() * words.length);
        input = words[i];
        apiImageFound(undefined, input);
    }

    var pictureChange = setInterval(randomWord, 5000);


    $('.ideas__list').masonry({
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        itemSelector: '.ideas__item',
        percentPosition: true
    });

});
