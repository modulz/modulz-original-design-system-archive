// Remove selected object

window.RemoveObject = function (e) {
    $('.ui-selected').remove();
    toggleControls();
}

$(window).on('keydown', function(e) {
    var keycode = e.keyCode || e.which;

    if (keycode == 8) {
        RemoveObject();
    }
    else if (keycode == 88) {
        if (e.metaKey) {
           RemoveObject();
        }
    }
});
