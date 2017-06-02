$(function() {
    $.get("../partials/navigation.html", function(data){
        $('#navigation').html(data);
    });
});
