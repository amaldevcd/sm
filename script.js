$('#slider').owlCarousel({
    loop:true,
    autoheight:true,
    margin:15,
    items:3,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$(document).ready(function(){
    $(".back-to-top").hide();

    $(window).scroll(function () {
           if ($(this).scrollTop() > 1600) {
               $('.back-to-top').fadeIn();
           } else {
               $('.back-to-top').fadeOut();
           }
       });
       // scroll body to 0px on click
       $('.back-to-top').click(function () {
           $('.back-to-top').tooltip('hide');
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
       
       $('.back-to-top').tooltip('show');

});

$(document).ready(function(){
    $(".call").hide();

    $(window).scroll(function () {
           if ($(this).scrollTop() > 1600) {
               $('.call').fadeIn();
           } else {
               $('.call').fadeOut();
           }
    });
       $('.call').tooltip('show');
});
