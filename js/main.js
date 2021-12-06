$(function () {
    $('.burger').on('click', function() {
        $('.header-menu').toggleClass('active');
        $('body').toggleClass('scroll-lock');
        $('.burger').toggleClass('active');
    });
    $('.header-menu__link').on('click', function() {
        $('.header-menu').removeClass('active');
        $('body').removeClass('scroll-lock');
        $('.burger').removeClass('active');
    });

    $('.slider').slick({
        infinite: false,
        slidesToShow: 4,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1270,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 664,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.actors__flex-wrap').on('click', function(e) {
        $('.actors__flex-wrap').not($(this)).removeClass('active');
        $('.info-actor').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    });
    $('.show-compositors').on('click', function(e) {
        $(this).toggleClass('hide-button')
        $(this).toggleClass('active').next().toggleClass('active');
    });
    
    $('.morefilms-slider').slick({
        infinite: false,
        variableWidth: true
    });
    $('.morefilms-slider').slick({
        infinite: false,
        variableWidth: true
    });
    $('.main-slider').slick({
        variableWidth: true,
        centerMode: true,
    });
    $('.watch-slider1').slick({
        variableWidth: true,
        infinite: true,
        slidesToShow: 2,
    });
    $('.watch-slider2').slick({
        variableWidth: true,
        infinite: true,
        slidesToShow: 2
    });
    $('.watch-slider3').slick({
        variableWidth: true,
        infinite: true,
        slidesToShow: 2
    });
    $('.tarif-slider').slick({
        variableWidth: true,
        infinite: true,
        slidesToShow: 2
    });
    $('.qna-spoiler__title-row').on('click', function(e) {
        $('.qna-spoiler__title-row').not($(this)).removeClass('active');
        $('.spoiler-qna-main').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    });
})