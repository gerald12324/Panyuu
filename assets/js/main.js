document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const shouldShow = passwordInput.type === 'password';
            passwordInput.type = shouldShow ? 'text' : 'password';
            togglePassword.textContent = shouldShow ? 'hide' : 'show';
        });
    }

    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => observer.observe(item));

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    const photoCards = document.querySelectorAll('.photo-card img');

    photoCards.forEach((img) => {
        img.addEventListener('click', () => {
            if (!lightbox || !lightboxImage) return;
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightbox.classList.add('open');
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('open');
            lightboxImage.src = '';
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                lightbox.classList.remove('open');
                lightboxImage.src = '';
            }
        });
    }
});
