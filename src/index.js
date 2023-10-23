import { toggleDropdown, hideDropdown } from './dropdown-menu.js';

const hamburgerBtns = document.querySelectorAll('.hamburger');

hamburgerBtns.forEach(btn => btn.addEventListener('click', toggleDropdown));
document.addEventListener('click', hideDropdown);