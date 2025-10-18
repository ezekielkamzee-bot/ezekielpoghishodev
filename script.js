// put current year in footer
document.querySelectorAll('[id^="year"]').forEach(el => el.textContent = new Date().getFullYear());

// mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') navLinks.style.display = '';
    else navLinks.style.display = 'flex';
  });
}

// contact form demo — no server: shows a friendly message and clears form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const response = document.getElementById('formResponse');
    response.textContent = 'Thanks — your message has been received (demo).';
    form.reset();
    setTimeout(()=> response.textContent = '', 5000);
  });
}
