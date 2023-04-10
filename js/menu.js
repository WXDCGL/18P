// $(function() {
//     // 當 ".toggle" 元素被點擊時
//     $('.toggle').click(function() {
//       // 切換 ".menu" 元素的 "expanded" class
//       $('#menu').toggleClass('expanded');
//       // 取得所有 "li" 元素
//       // 切換 ".container" 元素的 "close" class
//       $('.container').toggleClass('close');
//       // 切換 ".toggle" 元素的 "close" class
//       $('.toggle').toggleClass('close');
//       // 切換所有 "li" 元素的 "hidden" class  
//       $('li').toggleClass('hidden');
//     });
// });

$(function(){
  $('.toggle').click(function(){
    $('#menu').toggleClass('expanded');
    $('.container').toggleClass('open');
    $('.toggle').toggleClass('open');
    $('li').toggleClass('hidden');
  })
})