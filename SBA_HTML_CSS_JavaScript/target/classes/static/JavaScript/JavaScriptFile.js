document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Example of using variables, if statements, loops, and collections
    // const services = ['Full-time Care', 'Part-time Care', 'After-school Programs'];
    const servicesList = document.querySelector('nav ul li ul.dropdown');

    if (servicesList) {
        services.forEach(service => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = service;
            li.appendChild(a);
            servicesList.appendChild(li);
        });
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (validateEmail(email)) {
        alert('Contact form submitted successfully');
    } else {
        alert('Please enter a valid email address');
    }
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;

    if (validateEmail(email)) {
        alert('Newsletter form submitted successfully');
    } else {
        alert('Please enter a valid email address');
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}