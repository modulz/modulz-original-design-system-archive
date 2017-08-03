// Nudge element with cursor keys

$(window).on('keydown', function(e) {
    var defaultIncrement = 4;
    var largeIncrement = 8;
    var keycode = e.keyCode || e.which;

    if (keycode == 37) {
        $('.ui-selected').each(function() {
            var offset = $(this).position();
            if (e.shiftKey) {
                $(this).css('left', offset.left - largeIncrement);
            } else {
                $(this).css('left', offset.left - defaultIncrement);
            }
        });
        e.preventDefault();
    }
    else if (keycode == 38) {
        $('.ui-selected').each(function() {
            var offset = $(this).position();
            if (e.shiftKey) {
                $(this).css('top', offset.top - largeIncrement);
            } else {
                $(this).css('top', offset.top - defaultIncrement);
            }
        });
        e.preventDefault();
    }
    else if (keycode == 39) {
        $('.ui-selected').each(function() {
            var offset = $(this).position();
            if (e.shiftKey) {
                $(this).css('left', offset.left + largeIncrement);
            } else {
                $(this).css('left', offset.left + defaultIncrement);
            }
        });
        e.preventDefault();
    }
    else if (keycode == 40) {
        $('.ui-selected').each(function() {
            var offset = $(this).position();
            if (e.shiftKey) {
                $(this).css('top', offset.top + largeIncrement);
            } else {
                $(this).css('top', offset.top + defaultIncrement);
            }
        });
        e.preventDefault();
    }

    return false;
});
