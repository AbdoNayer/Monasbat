// Window Load screen

$(window).on('load', function () {

    // Mixitup
    // var mixer = mixitup('.container-item');

    // Loading Page
    $(".loader").fadeOut(500,function(){
        $(".loading").delay(1000).fadeOut(500);
    });

    $("body").css("overflow-y", "auto");

    // Animation Page
    AOS.init();

});

$(document).ready(function () {

    // Click Open Nav Mobile
    $(document).on("click", ".click-nav",function() {
        $(".handle").toggleClass("closed bgDefault");
        $(".Nav-Mobile").toggleClass("back");
        
    });

});