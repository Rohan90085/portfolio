// Get all buttons
const buttons = document.querySelectorAll('.point');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the text of the button (about, education, skill)
    const sectionName = button.textContent.trim().toLowerCase();

    // Find the matching section by ID
    const section = document.getElementById(sectionName);

    // Scroll smoothly to the section
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
