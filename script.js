function setupHelloButton() {
    const button = document.getElementById('hello-btn');
    if (button) {
        button.addEventListener('click', () => {
            alert('Hello!');
        });
    }
}

function setupThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (form && status) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            status.textContent = 'Thank you for your message!';
            status.classList.remove('hidden');
            form.reset();
        });
    }
}

function init() {
    setupHelloButton();
    setupThemeToggle();
    setupContactForm();
}

document.addEventListener('DOMContentLoaded', init);
