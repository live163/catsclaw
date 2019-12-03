$(function(){
    $('.thdud').on("click", function(){
        if($('.list').is(":hidden")){
            $('.list').slideDown(500);
        }else if($('.list').is(":visible")){
            $('.list').slideUp(500);
        }
    });

    $('#content, #header').on("click", function(){
        if($('.list').is(":visible")){
            $('.list').slideUp(500);
        }
    });
});