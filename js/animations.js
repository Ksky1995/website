'use strict'; /* === animations.js === */

document.addEventListener('DOMContentLoaded', () => {
    // Fade-in on scroll
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Count-up stats
    const stats = document.querySelectorAll('.stat-value[data-target]');
    
    const countTo = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        let startTime = null;

        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const progress = currentTime - startTime;
            const increment = Math.min(Math.floor((progress / duration) * target), target);
            
            element.textContent = increment + (element.getAttribute('data-suffix') || '');
            
            if (progress < duration) {
                requestAnimationFrame(animation);
            }
        };
        requestAnimationFrame(animation);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countTo(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));
});
