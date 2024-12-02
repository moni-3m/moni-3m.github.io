// JavaScript to hide and show the header on scroll
let lastScrollY = window.scrollY; // Store the last scroll position
const header = document.querySelector('header'); // Select the header

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY; // Update the last scroll position
});
