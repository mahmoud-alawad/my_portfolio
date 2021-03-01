/* page loader  */
(function(loader) {
    window.addEventListener('beforeunload', function (e) {
        activeLoader();
    });
    window.addEventListener('load', function (e){
        deactiveLoader();
    });
    function activeLoader() {
        loader.style.display = 'block';
        loader.style.opacity = 1;
    }
    function deactiveLoader() {
        setTimeout(() => {
            deactiveLoader();
        }, 1000);
        function deactiveLoader() {
            loader.style.opacity = 0;
            loader.addEventListener('transitionend', function () {
               loader.style.display = 'none' 
            },false);
        }
    }
})(document.querySelector('.page__loader'));

//torna su button 
const tornaSu = document.querySelector('.top__button');

tornaSu.addEventListener('click', ()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

 
/*show up side bar menu*/
let bar = document.querySelector('.side__bar__collaps');
let sideBar = document.querySelector('.side__bar');

bar.onclick = function () {
    sideBar.classList.toggle('open__sideBar');
    bar.classList.toggle('animateChevron');
}

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show') 
        })
    }
}

/*====================================colors option box */

const colorsLi = document.querySelectorAll('.colors__links li');

colorsLi.forEach(color =>{

color.parentElement.querySelectorAll('.active__link').forEach(element =>{

    element.classList.remove('active_link');
  
});

 color.addEventListener('click', (e)=>{

  document.documentElement.style.setProperty('--first-color', e.target.dataset.color);
  localStorage.setItem('color_option', e.target.dataset.color);

  //remove active class
 

       e.target.classList.add('active_link');
   });
});


//check if there is color option in storage
let mainColors = localStorage.getItem("color_option")

if (mainColors !== null) {

    document.documentElement.style.setProperty('--first-color', mainColors);
   
}



function optionColros(){
    /*Active link*/
    colorsLi.forEach(n => n.classList.remove('active__link'));
    this.classList.add('active__link');
    
    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
  }
  colorsLi.forEach(n => n.addEventListener('click', optionColros));




showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '80px',
//     duration: 2000,
//     reset: true
// });


// skill bar progress animation
let ourSkills = document.querySelector('.skills__container');
const homeTitle = document.querySelector('.home__title-color');
const titleAbout = document.querySelector('.about__text');
const imageAbout = document.querySelector('.about__img');
const imageSkills = document.querySelector('.skills__image__pc');

window.onscroll = function(){


    //offest top 
    let skillsOffsetTop = ourSkills.offsetTop;
    //outter height
    let skillsOutterHeight = ourSkills.offsetHeight;
    //window height of screen
    let windowHeight = this.innerHeight;
    //window scroll top
    let windowScrollTop = this.pageYOffset;
      if (windowScrollTop > (skillsOffsetTop + skillsOutterHeight - windowHeight )) {


          let allSkills = document.querySelectorAll('.skills__data .skills__bar');  
          let skillPrecentage = document.querySelectorAll('.skills__percentage');
          

          skillPrecentage.forEach(precentag =>{
              precentag.innerHTML = precentag.dataset.progress;
          })
          
         
         allSkills.forEach(skill => {
     
             skill.style.width = skill.dataset.progress;
         });
     
     }
// about section to animate the description
     let titleOffsetTop = titleAbout.offsetTop;
     let titleOtterHieght = titleAbout.offsetHeight;
     
 if (windowScrollTop > (titleOffsetTop + titleOtterHieght - windowHeight) ) {
    titleAbout.style.opacity = 1;
    imageAbout.style.transform = 'translateX(0rem)';
 
 }

 if (windowHeight < windowScrollTop ) {
    tornaSu.style.display = 'flex';
    imageSkills.style.paddingLeft = 0;
 }else{
    tornaSu.style.display = 'none';

 }
 }
 // animation for title page
window.onload = ()=>{
    homeTitle.classList.add('topToBottom');
}


/*SCROLL HOME*/
/*
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

//SCROLL ABOUT
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle',{}); 
// sr.reveal('.skills__text',{}); 

/*
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

//SCROLL WORK
sr.reveal('.work__img',{interval: 200}); 

//SCROLL CONTACT
sr.reveal('.contact__input',{interval: 200}); */

