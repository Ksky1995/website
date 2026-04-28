'use strict'; /* === form.js === */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    const successMsg = document.querySelector('#form-success');

    form?.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Basic validation
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff4444';
            } else {
                input.style.borderColor = '#ddd';
            }
        });

        if (!isValid) return;

        // Simulate submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        // Fake delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success state
        form.style.display = 'none';
        if (successMsg) {
            successMsg.style.display = 'block';
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});
