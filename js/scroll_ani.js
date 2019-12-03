$(function(){
    $("li:nth-child(1)").on('click', function(){
        var header_h = $("nav").height();
        $('html, body').animate({
            scrollTop: $("#main").offset().top -header_h*3
        },500);
        return false;
    });

    $("li:nth-child(2)").on('click', function(){
        var header_h = $("nav").height();
        $('html, body').animate({
            scrollTop: $("#banGal").offset().top - header_h*2
        },500);
        return false;
    });

    $("li:nth-child(3)").on('click', function(){
        $('html, body').animate({
            scrollTop: $("#mainCoon").offset().top +50
        },500);
        return false;
    });

    $("li:nth-child(4)").on('click', function(){
        $('html, body').animate({
            scrollTop: $("#qual").offset().top -50
        },500);
        return false;
    });

    $("li:nth-child(5)").on('click', function(){
        $('html, body').animate({
            scrollTop: $("#catSh").offset().top-12
        },500);
        return false;
    });

    $("li:nth-child(6)").on('click', function(){
        $('html, body').animate({
            scrollTop: $("#contect").offset().top
        },500);
        return false;
    });
});