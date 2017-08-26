// $(function() {

//     // Toggle overlay

//     function toggleOverlay() {
//         $('.js-Overlay').toggleClass('active');
//     }

//     // Toggle SideDrawer

//     function toggleSideDrawer() {
//         $('.js-SideDrawer').toggleClass('active');
//         toggleOverlay();
//     }

//     // Open SideDrawer

//     $('.js-SideDrawerTrigger').click(function() {
//         toggleSideDrawer();
//     });

//     // Deactivate components when click overlay

//     $('.js-Overlay').click(function() {
//         toggleSideDrawer();
//     });

//     // Prevent scroll bubbling

//     $(document).on('DOMMouseScroll mousewheel', '.js-preventScrollBubbling', function(ev) {
//         var $this = $(this),
//             scrollTop = this.scrollTop,
//             scrollHeight = this.scrollHeight,
//             height = $this.innerHeight(),
//             delta = (ev.type == 'DOMMouseScroll' ?
//                 ev.originalEvent.detail * -40 :
//                 ev.originalEvent.wheelDelta),
//             up = delta > 0;

//         var prevent = function() {
//             ev.stopPropagation();
//             ev.preventDefault();
//             ev.returnValue = false;
//             return false;
//         }

//         if (!up && -delta > scrollHeight - height - scrollTop) {
//             // Scrolling down, but this will take us past the bottom.
//             $this.scrollTop(scrollHeight);
//             return prevent();
//         } else if (up && delta > scrollTop) {
//             // Scrolling up, but this will take us past the top.
//             $this.scrollTop(0);
//             return prevent();
//         }
//     });
// });
