import AOS from 'aos';
import 'aos/dist/aos.css';
import { fslightbox } from 'fslightbox';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation__list');
const nav = document.querySelector('.navigation');
const link = document.querySelectorAll('.navigation__item-link');
const mouse = document.querySelectorAll('.scroll-downs, .mousey, .scroller');
const title = document.querySelector('.textbox__main');
const line = document.querySelectorAll('.line');
const mobile = document.querySelectorAll(
  '.btn--contact, .btn__icon, .btn__mobile'
);
const section = document.querySelector('.section__two');

const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__button');
const showModalTime = 2500;

let section_height = section.offsetHeight;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  menu.classList.toggle('menu-active');
  nav.classList.toggle('fade');
});

link.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    menu.classList.remove('menu-active');
    nav.classList.remove('fade');
  });
});

setTimeout(() => {
  mouse.forEach((el) => {
    el.classList.remove('hide');
  });
}, 500);

setTimeout(() => {
  title.classList.remove('hide');
}, 0);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 150) {
    mobile.forEach((el) => {
      el.classList.remove('hide');
    });
  } else {
    mobile.forEach((el) => {
      el.classList.add('hide');
    });
  }
});

// Modal

setTimeout(() => {
  [modal, modalContainer].forEach((el) => el.classList.add('show-modal'));
}, showModalTime);

closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show-modal');
});

window.addEventListener('click', (e) =>
  e.target === modalContainer
    ? modalContainer.classList.remove('show-modal')
    : false
);

AOS.init({
  offset: 100,
  duration: 600,
});
