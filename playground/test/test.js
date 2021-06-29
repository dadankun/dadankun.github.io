
//$(function () {
alert('hola')
$(".scrollClick").click(function () {
    //$('html, body').animate({ scrollTop: '+=windowHeight' }, 0);//'+=500px'
    var y = $(window).scrollTop(); $("html, body").animate({ scrollTop: y + $(window).height() - 200 }, 0);
});
         //});
