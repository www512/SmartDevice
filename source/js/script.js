'use strict';

//Плавный скролл
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 400,
      framesCount = 30;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;

      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

//Модальное окно
let call = document.querySelector('.site-list__button');
let popup = document.querySelector('.modal');
let close = document.querySelector('.modal__close');
let overlay = document.querySelector('.page-overlay');
let bodyScroll = document.querySelector('body');

call.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal__show');
    overlay.classList.add('page-overlay__show');
    bodyScroll.classList.add('scroll-off');
});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal__show');
    overlay.classList.remove('page-overlay__show');
    bodyScroll.classList.remove('scroll-off');
});

overlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal__show');
    overlay.classList.remove('page-overlay__show');
    bodyScroll.classList.remove('scroll-off');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove('modal__show');
        overlay.classList.remove('page-overlay__show');
        bodyScroll.classList.remove('scroll-off');
    }
});
