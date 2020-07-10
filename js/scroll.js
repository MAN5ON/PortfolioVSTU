$(document).ready(function () {
    $("a").click(function () {
        const elementClick = $(this).attr("href");
        const destination = $(elementClick).offset().top;
        $('html').animate({scrollTop: destination}, 1100);
        return false;
    });
});
