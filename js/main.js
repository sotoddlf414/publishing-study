$(function () {

    var pictureAdd_1 = 'img/jquery-attr/app-capture-01.png'
    var pictureAdd_2 = 'img/jquery-attr/app-capture-02.png'
    var pictureAdd_3 = 'img/jquery-attr/app-capture-03.png'
    var pictureAdd_4 = 'img/jquery-attr/app-capture-04.png'

    
$('.text-box').find('h4').click(function(){
    $('.text-box').find('p').stop().slideUp(600);
    $(this).next().stop().slideDown(600);

    $('.text-box').find('h4').removeClass('active');
    $(this).addClass('active');

    var index = $(this).index();  // 0 , 2, 4, 6
    
    if(index === 0){
        $('.img-box img').attr('src',pictureAdd_1);
        
    }
    else if(index === 2){
        $('.img-box img').attr('src',pictureAdd_2);
    }
    else if(index === 4){
        $('.img-box img').attr('src',pictureAdd_3);
    }
    else if(index === 6){
        $('.img-box img').attr('src',pictureAdd_4);
    }



});





});