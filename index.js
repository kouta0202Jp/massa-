$(function(){
 var offset = $('特定の要素').offset().top;
 var height = $(window).height();

 $(window).scroll(function () {
   if ($(this).scrollTop() > offset - height) {
      // アニメーションを実行
    $(function(){
    $('#jp').t({
        speed:60,//60ミリ秒
        speed_vary:true,
        blink_perm:false,
    });
});
    } 
 });
}
