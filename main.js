// ドロワーメニュー
const target = document.getElementById('menu');
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav-hamburger");
  nav.classList.toggle('in');
});


// トップへ戻るボタン

function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('scroll-top');




// function scrollTop('#scroll_top');
// scroll_top.addEventListener('click', scroll_top);
// function scroll_top() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// };

// window.addEventListener('scroll', scroll_top);
// if (window.pageYOffset > 3550) {
//   scroll_top.style.opacity = '1';
// } else {
//   scroll_top.style.opacity = '0';
// };