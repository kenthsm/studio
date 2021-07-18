// JavaScript Document
$(function () {
  /*** 上に戻るボタン ***/
  let topBtn = $('#scroll-top');
  topBtn.hide();

  // ある程度スクロールされたら、上に戻るボタンを表示する
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      topBtn.fadeIn(); // フェードインで表示
    } else {
      topBtn.fadeOut(); // フェードアウトで非表示
    }
  });

  topBtn.click(function (event) {
    event.preventDefault();  // ページ内リンクの挙動をキャンセル
    $('body,html').animate({ // スムーズにスクロールする設定
      scrollTop: 0
    }, 500);
  });

  /*** ナビゲーションメニュー ***/
  $('.close-button, .open-button').click(function () {
    $('.header nav').slideToggle();
  });

  /*** スライダー（slick） ***/
  $('#slick-slide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false
  });
  
  /*** アコーディオン ***/
  $('.faq__head').on('click',function(){
		$(this).next(".faq__body").slideToggle(300);
  });
  
  var toggles = $('.section-plan__table-connect');
  $('.section-plan__table-connect').on('click',function(){
		$(this).next(".section-plan__table-02").slideToggle(300);
    event.preventDefault(); 
		toggles.toggleClass("on");      
  });


});
