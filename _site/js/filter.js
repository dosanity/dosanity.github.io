$(window).load(function(){
    var $container = $('.projectContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.projectFilter a').click(function(){
        $('.projectFilter .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });

    $('#photoshop-editing button').click(function(){
        $('#photoshop-editing button').removeClass('current');
        $(this).addClass('current');
        // var selector = $(this).attr('filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });

    $('#gallery-prints button').click(function(){
        $('#gallery-prints button').removeClass('current');
        $(this).addClass('current');
        // var selector = $(this).attr('filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });

    $('#professional-website button').click(function(){
        $('#professional-website button').removeClass('current');
        $(this).addClass('current');
        // var selector = $(this).attr('filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});
