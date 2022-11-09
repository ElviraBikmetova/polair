//  Слайдер
$(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      touchThreshold: 10,
      dots: true,
      arrows: false,
    });
  });
  $(document).ready(function () {
    $(".slider-brands").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      touchThreshold: 10,
      dots: true,
      arrows: false,
    });
  });

// Меню бургер
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// Фиксированная шапка
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.header-fixed').addClass('header--is-show');
        $('.header, .header__navbar').addClass('header--is-unshow');
    } else {
        $('.header-fixed').removeClass('header--is-show');
        $('.header, .header__navbar').removeClass('header--is-unshow');

    }
})