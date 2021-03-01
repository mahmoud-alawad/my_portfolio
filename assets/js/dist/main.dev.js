"use strict";

/*===== MENU SHOW =====*/
var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');
/*===== ACTIVE AND REMOVE MENU =====*/

var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  /*Active link*/
  navLink.forEach(function (n) {
    return n.classList.remove('active');
  });
  this.classList.add('active');
  /*Remove menu mobile*/

  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach(function (n) {
  return n.addEventListener('click', linkAction);
});
/*===== SCROLL REVEAL ANIMATION =====*/

var sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});
/*SCROLL HOME*/

sr.reveal('.home__title', {});
sr.reveal('.button', {
  delay: 200
});
sr.reveal('.home__img', {
  delay: 400
});
sr.reveal('.home__social-icon', {
  interval: 200
});
/*SCROLL ABOUT*/

sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {
  delay: 400
});
sr.reveal('.about__text', {
  delay: 400
});
/*SCROLL SKILLS*/
// sr.reveal('.skills__subtitle',{}); 
// sr.reveal('.skills__text',{}); 

sr.reveal('.skills__data', {
  interval: 200
});
sr.reveal('.skills__img', {
  delay: 600
});
/*SCROLL WORK*/

sr.reveal('.work__img', {
  interval: 200
});
/*SCROLL CONTACT*/

sr.reveal('.contact__input', {
  interval: 200
}); // skill bar progress animation

var ourSkills = document.querySelector('.skills__container');

window.onscroll = function () {
  //offest top 
  var skillsOffsetTop = ourSkills.offsetTop; //outter height

  var skillsOutterHeight = ourSkills.offsetHeight; //window height of screen

  var windowHeight = this.innerHeight; //window scroll top

  var windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOutterHeight - windowHeight) {
    var allSkills = document.querySelectorAll('.skills__data .skills__bar');
    var skillPrecentage = document.querySelectorAll('.skills__percentage');
    console.log(skillPrecentage);
    skillPrecentage.forEach(function (precentag) {
      precentag.innerHTML = precentag.dataset.progress;
    });
    console.log(allSkills);
    allSkills.forEach(function (skill) {
      skill.style.width = skill.dataset.progress;
    });
  }
};