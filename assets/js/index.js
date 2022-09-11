const experienceListDesc = [
  'I am working in PT. Nettacode Indonesia as a mobile developer since September 2021 until now. I am developing an android app named PIFA and publish it in playstore. I developed that app using dart programming language and flutter SDK.',
  'I\'m taking the catamyst x codepolitan front-end bootcamp class from august 2022 until october 2022. In this bootcamp I learn front-end web development from zero. I learn how to create markdown, design UI in Figma, and learn how to develop a website using HTML, CSS, javascript, and React.',
  'I am an undergraduate student at Tanjungpura Unversity majoring in computer system engineering since July 2016 and will be finished on October 2022. when I was in college I focused on studying mobile and web development. My final project research made a website to detect clickbait news from news titles using Multinomial Naive Bayes algorithm.',
  'I am working in Bersihberes as a mobile application developer since July 2020 until January 2021. I am developing an android app named PIFA and publish it in playstore. I developed that app using dart programming language and flutter SDK.',
]
const nav = document.getElementsByTagName('nav')[0];
const socialMediaMobile = document.getElementsByClassName('social-media-mobile')[0];
let showSocialMedia;
let indexExperienceChoose = 0;

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