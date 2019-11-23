'use strict';

//Scroll
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

//Modal
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

//Mask in a modal window on a phone number
let phone = document.getElementById('phone');
let modalPhone = document.getElementById('modal_phone');

let maskOptions = {
  mask: '+{7}(000)000-00-00'
};
let maskForm = IMask(phone, maskOptions);
let maskModal = IMask(modalPhone, maskOptions);

//Footer
let logo = document.getElementById('logo');
let year = document.querySelector('.license-list__year');
let yearClone = year.cloneNode(true);

yearClone.classList.add('footer-year');
year.classList.add('footer-year-off');
logo.after(yearClone);

//Accordion for the mobile version in the footer
let section = document.getElementById('section-button');
let contacts = document.getElementById('contacts-button');
let sectionList = document.querySelector('.footer-list-section');
let contactsList = document.querySelector('.footer-list-contscts');

sectionList.classList.add('footer-list-off');
section.classList.remove('footer-button-mobile-off');
section.classList.add('footer-button-mobile');

function onSection () {
  if (section.classList.contains('footer-button-mobile-off')) {
    sectionList.classList.add('footer-list-off');
    section.classList.remove('footer-button-mobile-off');
    section.classList.add('footer-button-mobile');
    contactsList.classList.remove('footer-list-off');
    contacts.classList.add('footer-button-mobile-off');
    contacts.classList.remove('footer-button-mobile');
  } else {
    sectionList.classList.remove('footer-list-off');
    section.classList.add('footer-button-mobile-off');
    section.classList.remove('footer-button-mobile');
    contactsList.classList.add('footer-list-off');
    contacts.classList.remove('footer-button-mobile-off');
    contacts.classList.add('footer-button-mobile');
  }
}

function onContacts () {
  if (contacts.classList.contains('footer-button-mobile-off')) {
    contactsList.classList.add('footer-list-off');
    contacts.classList.remove('footer-button-mobile-off');
    contacts.classList.add('footer-button-mobile');
    sectionList.classList.remove('footer-list-off');
    section.classList.add('footer-button-mobile-off');
    section.classList.remove('footer-button-mobile');
  } else {
    contactsList.classList.remove('footer-list-off');
    contacts.classList.add('footer-button-mobile-off');
    contacts.classList.remove('footer-button-mobile');
    sectionList.classList.add('footer-list-off');
    section.classList.remove('footer-button-mobile-off');
    section.classList.add('footer-button-mobile');
  }
}

section.addEventListener('click', function(evt) {
  evt.preventDefault();
  onSection ();
})

contacts.addEventListener('click', function(evt) {
  evt.preventDefault();
  onContacts ();
})

//Form reset
// let form = document.querySelector('.filter');
// let formModal = document.querySelector('.modal__filter');

// window.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === 27) {
//         evt.preventDefault();
//         form.reset();
//         formModal.reset();
//     }
// });

//Input reset
let formFilter = document.querySelector('.filter__type');
let modalFilter = document.querySelector('.modal__filter');

formFilter.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.target.value = "";
  }
});

modalFilter.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (evt.target.value == "") {
      popup.classList.remove('modal__show');
      overlay.classList.remove('page-overlay__show');
      bodyScroll.classList.remove('scroll-off');
    } else {
      evt.target.value = "";
    }
  }
});
