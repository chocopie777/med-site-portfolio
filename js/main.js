$(function () {
    $('.bottom-content__slider').slick({
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/prev-arrow.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/next-arrow.svg" alt=""></img>'
    });
    var tab = $('.tabs .tabs__body > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('.tabs .tabs__items a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('.tabs .tabs__items a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();
    $('.menu-btn').on('click', function() {
        $('.menu-nav').toggleClass('active');
    });
    if ( screen.width < 990 ){
        $('.footer__column-title').on('click', function() {
            $(this).toggleClass('active').nextAll().slideToggle(300);
        });
    }
});