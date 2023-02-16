var hamburger = document.querySelector('.hamburger');
var navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

var navLinks = document.querySelectorAll('.nav-link');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
}
