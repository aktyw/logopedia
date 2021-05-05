//hamburger toggle

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navigation__list");
const nav = document.querySelector(".navigation")
const link = document.querySelectorAll(".navigation__item-link")
const mouse = document.querySelectorAll(".scroll-downs, .mousey, .scroller");
const title = document.querySelector(".textbox__main");
const line = document.querySelectorAll(".line");
const mobile = document.querySelectorAll(".btn--contact, .btn__icon, .btn__mobile");
const section = document.querySelector(".section__two");

let section_height = section.offsetHeight;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('menu-active');
    nav.classList.toggle('fade');
});

link.forEach( item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        menu.classList.remove('menu-active');
        nav.classList.remove('fade');
    })
});

setTimeout(() => {
    mouse.forEach( el => {
        el.classList.remove('hide');  
        }
    )   
}, 500);

setTimeout(() => {
    title.classList.remove('hide');
}, 0);

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 150) {
        mobile.forEach( el => {
            el.classList.remove('hide');
        });
    } else {
        mobile.forEach(el => {
            el.classList.add('hide');
        })
    };
});