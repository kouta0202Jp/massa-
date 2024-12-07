$(function(){
 var offset = $('.jp').offset().top;
 var height = $(window).height();

 $(window).scroll(function () {
   if ($(this).scrollTop() > offset - height) {
      $(function() {
  //タイピングアニメーション
  $('.js').typed({
    strings: ["welcome to My Portfolio.", "Let's scroll down."],
    typeSpeed: 100,
    startDelay: 1000,
    backSpeed: 20,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    backDelay: 500
  });
});

    } 
 });
}
