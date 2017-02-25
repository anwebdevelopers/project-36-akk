$(function() {

    'use strict';

    //------------------------------------------------------------
    //fullscreen header
    //------------------------------------------------------------
    var $header = $('.header');
    function fullscreen() {
        var windowHeight = $(window).height();
        if (windowHeight > $header.height()) {
            $header.css({
                'height' : windowHeight + 'px'
            });
        }
    }
    fullscreen();
    $(window).resize(function() {
        fullscreen();
    });

    //------------------------------------------------------------
    //stick menu
    //------------------------------------------------------------
    var $headerTopLine = $('.header__top-line'),
        $about = $('.about'),
        $logo = $('.header__logo');

    $(window).scroll(function() {

        if ($(window).scrollTop() >= $about.offset().top - $headerTopLine.height()) {
            $headerTopLine.addClass('header__top-line-white');
            $logo.removeClass('small-wisible').addClass('full-wisible')

        } else {
            $headerTopLine.removeClass('header__top-line-white');
            if(!$headerTopLine.hasClass('active')) {
                $logo.removeClass('full-wisible').addClass('small-wisible')
            }
        }
    });

    //-------------------------------
    //Мобильное меню
    //-------------------------------
    $('.header__nav-button').click(function() {
        if ($headerTopLine.hasClass('active') == false) {
            $headerTopLine.addClass('active');
            $logo.removeClass('small-wisible').addClass('full-wisible');
        } else {
            $headerTopLine.removeClass('active');
            if(!$headerTopLine.hasClass('header__top-line-white')) {
                $logo.removeClass('full-wisible').addClass('small-wisible')
            }
        }
    });

    //Выключение при клике по ссылке
    $('.header__nav a').click(function() {
        $headerTopLine.removeClass('active');
    });

    //Выключение скрытого меню по ресайзу
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 768 && $headerTopLine.hasClass('active')) {
            $headerTopLine.removeClass('active');
            if(!$headerTopLine.hasClass('header__top-line-white')) {
                $logo.removeClass('full-wisible').addClass('small-wisible')
            }
        }
    });

    //------------------------------------------------
    // Плавный скролл.mPageScroll2id()
    //------------------------------------------------
    $("a[href*='#']").mPageScroll2id({
        offset: $headerTopLine.height() - 10,
        scrollEasing: 'easeInOutSine',
        scrollSpeed: 900,
        autoScrollSpeed: true
    });

    //-----------------------------------------------------------------
    //Табы
    //-----------------------------------------------------------------
    var $servicesTabTextItem = $(".services__tab-text-item"),
        $servicesTabTextBox = $(".services__tab-text-box"),
        $servicesTabButtonBox = $(".services__tab-button-box");

    $servicesTabTextItem.not(":first").hide();
    $servicesTabButtonBox.on('click', '.services__tab-button-item:not(.active)', function() {
        var w = $(window).width();
        $(this).addClass('active').siblings().removeClass('active');
        $servicesTabTextItem.slideUp(300).eq($(this).index()).slideDown(300);
        if (w <= 480) {
            var toScroll = $servicesTabTextBox.offset().top -  $headerTopLine.height();
            $('html, body').animate({scrollTop: toScroll}, 600);
    			return false;
        }
    });

    //-----------------------------------------------------------------
    //Прелоадер
    //-----------------------------------------------------------------

    $(document).ready(function() {
        $("#preloader__img").fadeOut(400);
        $("#preloader").fadeOut(600);
    });
});
