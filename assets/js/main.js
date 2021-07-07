const navmenu = document.getElementById('nav-menu'),
      navshow = document.getElementById('nav-toggle'),
      navclose = document.getElementById('nav-close');

      
      /*===== MENU SHOW =====*/
      /*==================== MENU SHOW Y HIDDEN ====================*/
      /* Validate if constant exists */
      
      if(navshow){
          navshow.addEventListener('click',() =>{
              navmenu.classList.add('show-menu')
          })
      }

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navclose){
    navclose.addEventListener('click',() =>{
        navmenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navlink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    navmenu.classList.remove('show-menu');
}

navlink.forEach(n => n.addEventListener('click',linkAction))

/*==================== ACCORDION SKILLS ====================*/

const skillcontent = document.getElementsByClassName('skill__content'),
      skillheader  = document.querySelectorAll('.skill__header')
    //   skillclose  = document.querySelectorAll('.skill__close'),
    //   skillopen  = document.querySelectorAll('.skill__open');

function toggleskill(){
    let itemclass = this.parentNode.className

    for (i = 0; i < skillcontent.length; i++){
        skillcontent[i].className = 'skill__content skill__close'
    }
    if (itemclass === 'skill__content skill__close'){
        this.parentNode.className ='skill__content skill__open'
    }
    
}

skillheader.forEach((el) => {
el.addEventListener('click',toggleskill)
})

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/
const modelview = document.querySelectorAll('.service__model'),
      modelbtn = document.querySelectorAll('.service__button'),
      modelclose = document.querySelectorAll('.service__model-close');

      let model = function (modelclick){
          modelview[modelclick].classList.add('active-model')
      }

      modelbtn.forEach((modelbtns,i) => {
          modelbtns.addEventListener('click', ()=> {
              model(i)
          })
      })

modelclose.forEach((modelcloses)=>{
    modelcloses.addEventListener('click',()=>{
      modelview.forEach((modelviews)=>{
          modelviews.classList.remove('active-model')
      })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperportfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
   
  });

/*==================== TESTIMONIAL ====================*/
let testimonial = new Swiper('.testimonial__container', {
    loop:true,
    grabCursor:true,
    spaceBetween:48,


    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },

    breakPoints: {
        568: {
            slidePerView: 2,
        }
    }
   
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
    window.addEventListener('scroll',scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})