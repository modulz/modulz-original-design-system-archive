// Sort object up

window.SortUp = function () {
    var currentIndex = $('.ui-selected').css('z-index');
    var newIndex = ++currentIndex;

    $(".js-Component").filter(function(index) {
        return index === newIndex;
    }).css('z-index', newIndex -= 1);

    $('.ui-selected').css('z-index', +currentIndex);
}

// Sort object down

window.SortDown = function () {
    var currentIndex = $('.ui-selected').css('z-index');
    var newIndex = currentIndex -= 1;

    $(".js-Component").filter(function(index) {
        return index === newIndex;
    }).css('z-index', ++newIndex);

    $('.ui-selected').css('z-index', currentIndex);
}

// Call sort functions by hotkey

$(window).on('keydown', function(e) {
    var keycode = e.keyCode || e.which;

    if (e.metaKey && e.altKey && keycode == 38) {
        SortUp();
    }
    else if (e.metaKey && e.altKey && keycode == 40) {
        SortDown();
    }
});
