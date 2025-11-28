// Form Submission
const form = document.querySelector('.consulting-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.textContent;

        btn.textContent = "Demande envoyée !";
        btn.style.background = "#10B981"; // Success green

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = "";
            form.reset();
        }, 3000);
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
