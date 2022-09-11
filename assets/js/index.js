const experienceListDesc = [
  '[Long paragraph my experience in PT.Netta Code Indonesia]',
  '[Long paragraph my experience in Catamyst x Codepolitan]',
  '[Long paragraph my experience in Tanjungpura University]',
  '[Long paragraph my experience in Bersihberes]',
]
let indexExperienceChoose = 0;

const nav = document.getElementsByTagName('nav')[0];
const socialMediaMobile = document.getElementsByClassName('social-media-mobile')[0];
let showSocialMedia;

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }

  clearTimeout(showSocialMedia);
  socialMediaMobile.classList.add('hidden');

  showSocialMedia = setTimeout(() => {
    socialMediaMobile.classList.remove('hidden');
  }, 1500);
});




const navMenu = document.getElementsByClassName('nav-menu-icon')[0];
const navList = nav.children[1];
navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('close');
  navList.classList.toggle('nav-mobile-show');
});

socialMediaMobile.addEventListener('click', () => {
  socialMediaMobile.classList.toggle('show');
})

if (navList.children[0].children[0].classList.length > 0) {
  const experienceList = document.getElementsByClassName('experience')[0].getElementsByTagName('section')[0];
  const experienceDesc = document.getElementById('experience-desc');

  const experienceListFunc = () => {
    experienceDesc.innerHTML = experienceListDesc[indexExperienceChoose];

    for (let [index, experience] of [].entries.call(experienceList.children)) {
      if (index === indexExperienceChoose) {
        experience.children[0].classList.add('active');
        experience.children[1].children[0].classList.add('active');
      } else {
        experience.children[0].classList.remove('active');
        experience.children[1].children[0].classList.remove('active');
      }

      experience.addEventListener('click', () => {
        indexExperienceChoose = index;
        experienceListFunc();
      });
    }
  }

  experienceListFunc();
}