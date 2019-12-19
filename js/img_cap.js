$(function(){
    var duration = 500;
    var $img_cap = $('.caPho');
    $img_cap.find('[class^=cap]')
    .on('mouseover', function(){
        $(this).find('strong').stop(true).animate({bottom: '0px'}, duration);
        $(this).find('span').stop(true).animate({opacity: 1}, duration);
    })
    .on('mouseout', function(){
        $(this).find('strong').stop(true).animate({bottom: '-280px'}, duration);
        $(this).find('span').stop(true).animate({opacity: 0}, duration);
    });
});