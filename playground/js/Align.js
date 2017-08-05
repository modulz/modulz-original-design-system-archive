// Align selected objects


window.AlignTop = function () {
    offsets = []

    $('.ui-selected').each(function() {
        var offset = $(this).position().top;
        offsets.push(offset);
    });

    var minOffset = Math.min.apply(Math, offsets);

    $('.ui-selected').css('top', minOffset);
}

window.AlignLeft = function () {
    offsets = []

    $('.ui-selected').each(function() {
        var offset = $(this).position().left;
        offsets.push(offset);
    });

    var minOffset = Math.min.apply(Math, offsets);

    $('.ui-selected').css('left', minOffset);
}

window.AlignBottom = function () {
    offsets = []

    $('.ui-selected').each(function() {
        var offsetBottom = $(this).position().top + $(this).height();
        offsets.push(offsetBottom);
    });

    var maxOffset = Math.max.apply(Math, offsets);

    $('.ui-selected').each(function() {
        $(this).css('top', maxOffset - $(this).height());
    });
}

window.AlignRight = function () {
    offsets = []

    $('.ui-selected').each(function() {
        var offsetRight = $(this).position().left + $(this).width();
        offsets.push(offsetRight);
    });

    var maxOffset = Math.max.apply(Math, offsets);

    $('.ui-selected').each(function() {
        $(this).css('left', maxOffset - $(this).width());
    });
}

window.AlignVertical = function () {
    offsetsTop = []
    offsetsBottom = []

    $('.ui-selected').each(function() {
        var offsetTop = $(this).position().top;
        var offsetBottom = $(this).position().top + $(this).height();
        offsetsTop.push(offsetTop);
        offsetsBottom.push(offsetBottom);
    });

    var lowestOffset = Math.min.apply(Math, offsetsTop);
    var highestOffset = Math.max.apply(Math, offsetsBottom);

    var offsetDifference = highestOffset - lowestOffset;
    var centerOffset = highestOffset - offsetDifference / 2;

    $('.ui-selected').each(function() {
        $(this).css('top', centerOffset - $(this).height() / 2);
    });
}

window.AlignHorizontal = function () {
    offsetsLeft = []
    offsetsRight = []

    $('.ui-selected').each(function() {
        var offsetLeft = $(this).position().left;
        var offsetRight = $(this).position().left + $(this).width();
        offsetsLeft.push(offsetLeft);
        offsetsRight.push(offsetRight);
    });

    var lowestOffset = Math.min.apply(Math, offsetsLeft);
    var highestOffset = Math.max.apply(Math, offsetsRight);

    var offsetDifference = highestOffset - lowestOffset;
    var centerOffset = highestOffset - offsetDifference / 2;

    $('.ui-selected').each(function() {
        $(this).css('left', centerOffset - $(this).width() / 2);
    });
}
