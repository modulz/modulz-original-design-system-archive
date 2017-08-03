$('.js-DrawComponent').on('click', function(e) {
    var componentContainer = $('<div class="position-absolute js-Component draggable" style="top: 100px; left: 100px;">');
    var button = $('<button class="Button primary" type="button" style="pointer-events: none;">Button</button>');
    $(componentContainer).append(button);
    $('.js-Canvas').append(componentContainer);

    $('.js-Component').draggable({
        grid: [ 4, 4 ],
        snap: true,
        snapTolerance: 4,
        containment: ".js-Canvas"
    });
});
