const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobile = document.querySelector('.cancle-mobile');
const menuIcon = document.querySelector('.menu-icon');
const button = document.querySelector('.button');

function toggleMenu() {
    mobileMenu.classList.toggle('hide');
    closeMobile.classList.toggle('hide');
    body.classList.add('no-scroll');
}
menuIcon.addEventListener('click', toggleMenu);
  
function closeMenu() {
closeMobile.classList.toggle('hide');
mobileMenu.classList.toggle('hide');
body.classList.remove('no-scroll');
}
closeMobile.addEventListener('click', closeMenu);
  
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach((link) => {
link.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide');
    closeMobile.classList.toggle('hide');
    body.classList.remove('no-scroll');
});
});

function startCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 20; // Speed of counting in milliseconds

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;

        let count = 0;

        const updateCount = () => {
            count = Math.min(count + increment, target);
            counter.innerText = count;

            if (count < target) {
                requestAnimationFrame(updateCount);
            }
        };

        updateCount();
    });
}

// Call startCounters when the window has finished loading
window.addEventListener('load', startCounters);
  

