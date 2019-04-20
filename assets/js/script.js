$(document).ready(function () {
    $('.slides').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".btn-scroll").click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section3").offset().top
        }, 2000);
    });

    $('.card__feature-cta').click(function () {
        window.location.href = 'register.html'
    })
    $(document).ready(function () {
        if (window.location.hash == "#section4") {
            $('html, body').animate({
                scrollTop: $("#section4").offset().top
            }, 2000);
        }
    });

    $(document).ready(function () {
        ToggleScrollUp();

        $(window).scroll(function () {
            ToggleScrollUp();
        });

        $('#scrollup').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

    function ToggleScrollUp() {
        if ($(".yourbox").offset().top < $(window).scrollTop() + $(window).height()) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
    }

    //scroll nav

});