'use strict';

/* nav Bar  */

const hamburgerNavigation = document.querySelector('.hidden');
const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', () => {
  if (hamburgerNavigation.className == 'hidden') {
    hamburgerNavigation.classList.remove('hidden');
  } else {
    hamburgerNavigation.classList.add('hidden');
  }
});
