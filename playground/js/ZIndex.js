window.SortUp = function () {
    var currentIndex = $('.ui-selected').eq(0).css('z-index');
    $('.ui-selected').css('z-index', ++currentIndex);
}

window.SortDown = function () {
    var currentIndex = $('.ui-selected').css('z-index');
    $('.ui-selected').css('z-index', currentIndex -= 1);
}

$(window).on('keydown', function(e) {
    var keycode = e.keyCode || e.which;

    if (e.metaKey && e.altKey && keycode == 38) {
        SortUp();
    }
    else if (e.metaKey && e.altKey && keycode == 40) {
        SortDown();
    }
});
