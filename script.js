document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const signupLink = document.querySelector('.signup-link');
    const loginLink = document.querySelector('.login-link');

    // Toggle between login and signup forms
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Handle form submissions
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = this.querySelector('input[type="text"]').value;
        const password = this.querySelector('input[type="password"]').value;
        const loginError = document.getElementById('login-error');

        // Check if credentials match with signup
        const signupUsername = signupForm.querySelector('input[type="text"]').value;
        const signupPassword = signupForm.querySelectorAll('input[type="password"]')[0].value;

        if (username === signupUsername && password === signupPassword && username !== '' && password !== '') {
            loginError.style.display = 'none';
            console.log('Login successful!');
            // Redirect to ai.html
            window.location.href = 'ai.html';
        } else {
            loginError.style.display = 'block';
        }
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelectorAll('input[type="password"]')[0].value;
        const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
        const signupError = document.getElementById('signup-error');

        if (password !== confirmPassword) {
            signupError.style.display = 'block';
            return;
        }

        signupError.style.display = 'none';
        console.log('Signup successful!');
        // Redirect to ai.html
        window.location.href = 'ai.html';
    });
});