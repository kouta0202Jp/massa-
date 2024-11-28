jQuery(function ($) {

  const ham = document.querySelector('#js-hamburger');
  const nav = document.querySelector('#js-nav');
  const mask = document.querySelector('#js-mask');

  ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
    mask.classList.toggle('active');
  });

});
