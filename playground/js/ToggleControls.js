function toggleControls() {
    var selectedObjects = $('.ui-selected').length;

    if (selectedObjects >= 2) {
        $('.js-Controls').show();
    }
    else {
        $('.js-Controls').hide();
    }
}

// Toggle controls when click anywhere

$(document).on( "mousedown", function(e) {
    if ($(e.target).is('.js-CanvasArea, .js-CanvasArea *')) {
        toggleControls();
    }
});
