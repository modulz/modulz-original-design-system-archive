// Remove selected object

$(window).on('keydown', function(e) {
    var keycode = e.keyCode || e.which;

    if (keycode == 8) {
        $('.ui-selected').remove();
    }

    toggleControls();

    return false;

});
