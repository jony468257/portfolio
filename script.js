// JavaScript for Portfolio Interactions

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('py-4', 'shadow-2xl');
            nav.classList.remove('py-6');
        } else {
            nav.classList.remove('py-4', 'shadow-2xl');
            nav.classList.add('py-6');
        }
    });

    // Intersection Observer for animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections and cards
    document.querySelectorAll('section, .group').forEach(el => {
        el.style.opacity = '0'; // Initial state for animation
        observer.observe(el);
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.md:hidden button');
    const navLinks = document.querySelector('.md:block');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            // Clone links for mobile if not already present or just toggle a class
            // For simplicity, we'll just toggle a simple mobile drawer simulation
            const isMenuOpen = navLinks.classList.contains('hidden');
            if (isMenuOpen) {
                navLinks.classList.remove('hidden');
                navLinks.classList.add('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-dark', 'p-6', 'border-b', 'border-white/10');
            } else {
                navLinks.classList.add('hidden');
                navLinks.classList.remove('flex', 'flex-col', 'absolute', 'top-20', 'left-0', 'w-full', 'bg-dark', 'p-6', 'border-b', 'border-white/10');
            }
        });
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
