$(function device_check() {
    var devPc = "win16|win32|win64|mac|macintel";
    var devThis = navigator.platform;

    if(devThis) {
        if(devPc.indexOf(navigator.platform.toLowerCase()) < 0){
            $('.thdud').on("click", function(){
                if($('.list').is(":hidden")){
                    $('.list').slideDown(500);
                }else if($('.list').is(":visible")){
                    $('.list').slideUp(500);
                }
            });

            $('#content, #header, .list').on("click", function(){
                if($('.list').is(":visible")){
                    $('.list').slideUp(500);
                }
            });
        }
    }

});