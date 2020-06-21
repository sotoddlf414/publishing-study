$(function () {

$('.menu li').mouseenter(function(){
    $(this).children('.sub-menu').stop().slideDown(800);
})
$('.menu li').mouseleave(function(){
    $(this).children('.sub-menu').stop().slideUp(800);
})


});