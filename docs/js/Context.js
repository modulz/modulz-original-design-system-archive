// Context

// Function for toggling Context component

window.toggleContext = function ($this) {
    $this.toggleClass('is-active');
    $('.js-ContextContainer.is-active').not($this).removeClass('is-active');
}

// Close Context component when click anywhere

$(document).on('click', function(e) {
    $('.js-ContextContainer.is-active').removeClass('is-active');
});

// Call Context function and prevent click anywhere function from bubbling

$(document).on('click', '.js-ContextContainer', function(e) {
    e.stopPropagation();
    toggleContext($(this));
});

// Prevent closing when click context component itself

$(document).on('click', '.Context', function(e) {
    e.stopPropagation();
});
