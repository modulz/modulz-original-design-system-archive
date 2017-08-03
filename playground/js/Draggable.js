// Define draggable function

$('.js-Component').draggable({
    grid: [ 4, 4 ],
    snap: true,
    snapTolerance: 4,
    containment: ".js-Canvas"
});
