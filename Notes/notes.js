'use strict';
const closeButton = document.querySelector('.close-button');
const popUp = document.querySelector('.wrapper-container');
const classBoxes = document.querySelector('.class-boxes'); // This will be the div which will hide on toggle
const footer = document.querySelector('.footer');
const class6 = document.getElementById('c6');
const class7 = document.getElementById('c7');
const class8 = document.getElementById('c8');
const class9 = document.getElementById('c9');
const class10 = document.getElementById('c10');
const class11 = document.getElementById('c11');
const class12 = document.getElementById('c12');
const classNTSE = document.getElementById('NTSE');
const classOlympiad = document.getElementById('Olympiad');
const chemistryNote = document.getElementById('chemistry');
const physicsNotes = document.getElementById('physics');
const bioNotes = document.getElementById('biology');
const mathsNotes = document.getElementById('mathematics');
const computerNotes = document.getElementById('computer-science');
const englishNotes = document.getElementById('English');
const classes = document.querySelectorAll('.class');
const navBar = document.querySelector('.navbar');
for (var i = 0; i < classes.length; i++) {
  classes[i].addEventListener('click', () => {
    popUp.classList.remove('hidden');
    classBoxes.classList.add('hidden');
    navBar.classList.add('hidden');
    footer.classList.add('hidden');
  });
}

closeButton.addEventListener('click', () => {
  popUp.classList.add('hidden');
  classBoxes.classList.remove('hidden');
  navBar.classList.remove('hidden');
  footer.classList.remove('hidden');
});
