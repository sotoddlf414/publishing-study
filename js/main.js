$(function () {

$('.picture-box img').click(function(){
    
    $('.picture-box').find('img').removeClass('active');
    $(this).addClass('active');

   var index = $('.picture-box').find('.active').index();
   
   $('.text-box').siblings().removeClass('active'); 
   $('.text-box').eq(index).addClass('active') 
    

})



});