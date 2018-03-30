$(document).ready(function(){
    //Первый слайдер//
    $(".slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['','']
    });
    //Второй слайдер//
    $(".row_offers").owlCarousel({
        items: 5,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        center: true,
        nav: true,
        navText: ['',''],
        responsive:{
            1440:{
                items:5
            },
            1024:{
                items:5
            },
            768:{
                items:3
            },
            425:{
                items:1
            },
            375:{
                items:1
            }
        }
    });
    //Третий слайдер//
    $(".happy_clients").owlCarousel({
        items: 3,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true,
        center: true,
        nav: true,
        navText: ['',''],
        responsive:{
            768:{
                items:3
            },
            375:{
                items:1
            }
        }

    });
    //Календарь//
    $(".datepicker").datepicker({ dateFormat: 'dd.mm.yy'});

    //Меню мобильное//
    $('#nav-toggle').on('click', function(e) {
        e.preventDefault();

        if ( $('#navigation').hasClass('navigation_holder--mobile-open') ) {
            $('#navigation').fadeOut();

            setTimeout( function () {
                $('#navigation').removeClass('navigation_holder--mobile-open');
            } , 1000);
        }else{
            $('#navigation').hide().addClass('navigation_holder--mobile-open').fadeIn();
        }
    });

    //Якорь//
    $('.footer_color a, .navigation_list a').click(function () {
        var element = $(this).attr('href');
        var dist = $(element).offset().top;

        $('html, body').animate({'scrollTop': dist}, 1000);
        return false;
    });
});


