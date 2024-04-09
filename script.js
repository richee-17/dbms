// script.js

// Toggle mobile menu
const menuBars = document.getElementById('menu-bars');
const navbar = document.querySelector('.navbar');

menuBars.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - navbar.clientHeight,
            behavior: 'smooth'
        });
    });
});

// Make Appointment button click event
const makeAppointmentBtn = document.querySelector('.btn');

makeAppointmentBtn.addEventListener('click', () => {
    // Add your code to handle the click event for the Make Appointment button
    // For example, you can open a modal or navigate to another page for appointment booking
});
