let coachings = document.querySelector('.contact-dropdown')

document.querySelector('.dropdown').addEventListener('mouseenter', (e) => {
    coachings.classList.add('down')
});

document.querySelector('.dropdown').addEventListener('mouseleave', (e) => {
    coachings.classList.remove('down')
});