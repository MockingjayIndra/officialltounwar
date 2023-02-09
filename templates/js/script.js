// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu  = document.querySelector('#nav-menu');

const type=password

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden') 
});