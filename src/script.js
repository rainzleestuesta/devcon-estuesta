// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('click', () => {
            sections.forEach(sec => sec.classList.remove('highlight'));
            section.classList.add('highlight');
        });
    });
});
