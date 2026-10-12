document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.querySelector('nav ul');
    const logoImage = document.getElementById('logo-image');

    // Theme Switcher
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme && currentTheme === 'dark-theme') {
        document.body.classList.add('dark-theme');
        logoImage.src = 'images/rento-logo-light.png';
        themeToggle.textContent = '☀️';
    } else {
        logoImage.src = 'images/rento-logo.png';
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        let theme = '';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark-theme';
            logoImage.src = 'images/rento-logo-light.png';
            themeToggle.textContent = '☀️';
        } else {
            theme = 'light-theme';
            logoImage.src = 'images/rento-logo.png';
            themeToggle.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    });

    // Mobile Navigation Toggle
    mobileNavToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile nav when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Highlight active nav link
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
});
