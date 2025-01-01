// Toggle Dark Mode
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Responsive Menu Toggle
const menuToggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
