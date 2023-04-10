// $(function() {
//     // 綁定 .lightbox 元素的點擊事件
//     $('.lightbox').click(function(e) {
//       // 防止點擊時跳轉到 href 指定的 URL
//       e.preventDefault();
//       // 取得被點擊的圖片 URL
//       var imageUrl = $(this).attr('href');
//       // 設置 .lightbox-image 元素的 src 屬性為所點擊圖片的 URL
//       $('.lightbox-image').attr('src', imageUrl);
//       // 顯示 .lightbox-overlay 元素，以顯示圖片
//       $('.lightbox-overlay').fadeIn();
//     });
  
//     // 綁定 .lightbox-close 元素的點擊事件
//     $('.lightbox-close').click(function() {
//       // 隱藏 .lightbox-overlay 元素，以關閉圖片顯示
//       $('.lightbox-overlay').fadeOut();
//     });
//   });

$(window).on('load',function(){
  $('.lightbox').click(function(e){
    e.preventDefault();
    let img_url = $(this).attr('href');
    // console.log(img_url);
    $('.lightbox-image').attr('src',img_url);
    $('.lightbox-overlay').fadeIn(1000);
  })

  $('.lightbox-close').click(function(){
    $('.lightbox-overlay').fadeOut(1000)
  })  
})