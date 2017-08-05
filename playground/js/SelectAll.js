// Select all objects

window.SelectAll = function () {
    $('.js-Component').addClass("ui-selected");
}

$(window).on('keydown', function(e) {
    var keycode = e.keyCode || e.which;

    if (keycode == 65) {
        if (e.metaKey) {
           SelectAll();
        }
    }
});
