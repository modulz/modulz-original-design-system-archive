$(function() {

    // Render navigation content into SideDrawer

    $.get("../partials/navigation.html", function(data){
        $('.js-Navigation').html(data);
    });

    // Open SideDrawer

    $('.js-SideDrawerTrigger').click(function() {
        toggleSideDrawer();
    });

    // Deactivate components when click overlay

    $('.js-Overlay').click(function() {
        toggleSideDrawer();
    });

    // Toast

    $('.js-ToastTrigger').click(function() {
        $('.Toast').toggleClass('is-active');
    });
});
