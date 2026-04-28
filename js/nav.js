'use strict'; /* === nav.js === */

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggle = document.querySelector('.nav__toggle');
    const menuLinks = document.querySelectorAll('.mobile-menu__link');

    // Sticky Nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
    });

    // Mobile Menu Toggle
    menuToggle?.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-open');
        const icon = menuToggle.querySelector('i'); // Assuming Lucide icon
        // If it was a simple burger menu, you'd toggle classes for animation
    });

    // Close Mobile Menu on Link Click
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-open');
        });
    });

    // Scroll Spy
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('is-active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('is-active');
            }
        });
    });
});
