// js
// const target = document.getElementById("menu");
// target.addEventListener('click', () => {
//   target.classList.toggle('open');
//   const nav = document.getElementById("nav-hamburger");
//   nav.classList.toggle('in');
// });

// jquery たぶん↓をhtmlで読み込む

$('.menu').on('click', function () {
  $('.menu-line').toggleClass('active');
  $('.gnav').fadeToggle();
  $('.drawer').drawer('close');

  $('#nav a').on('click', function () {
    $('#nav').toggleClass('active');
    $(".menu").toggleClass('active');
  })

});
//   ↓ hrefの値が#から始まるa要素
$('a[href^="#"]').on('click', function () {
  $('.menu').click(); // .menuをクリックした時と同じ処理

  return false; //a要素のリンク先移動防ぐ
});