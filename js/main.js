const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu__link');

burger.addEventListener('click', () => {
  menu.classList.toggle('isOpen');
  body.classList.toggle('lock');
});
menuLinks.forEach((menuLink) =>
  menuLink.addEventListener('click', () => {
    menu.classList.remove('isOpen');
    body.classList.remove('lock');
  })
);
