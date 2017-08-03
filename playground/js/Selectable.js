// Define selection area

$('.js-CanvasArea').selectable({
    filter: ".js-Component",
    selected: function( event, ui ) {
        toggleControls();
    }
});

// Select objects

$(document).on('mousedown', '.js-Component', function(e) {
    if (e.shiftKey) {
        $(this).toggleClass("ui-selected");
    } else {
        if ($(this).hasClass("ui-selected")) {
            return false;
        } else {
            $(".js-Component").removeClass("ui-selected");
            $(this).addClass("ui-selected");
        }
    }
});
