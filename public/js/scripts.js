
$(".nav a").on("click", function () {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});

//close mobile menu on click
$(function () {
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
        $('.navbar-toggle:visible').click();
    });
});
