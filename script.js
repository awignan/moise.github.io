document.addEventListener('DOMContentLoaded', () => {
    // Show the first section by default
    showSection('section1');
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.main-content .section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
}
