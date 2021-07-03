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


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 