// Smooth Scrolling
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            const offset = 80;
            const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: position, behavior: 'smooth' });
        }
    });
});

// Active Navigation
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Certificate Modal Functions
function openCertModal() {
    document.getElementById('certModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    document.getElementById('certModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCertModal();
    }
});
