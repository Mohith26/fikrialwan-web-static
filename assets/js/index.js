window.addEventListener('scroll', () => {
  const nav = document.getElementsByTagName('nav')[0];
  if (window.scrollY > 30) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
});

const navMenu = document.getElementsByClassName('nav-menu-icon')[0];
const navList = document.getElementsByTagName('nav')[0].children[1];
navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('close');
  navList.classList.toggle('nav-mobile-show');
});