document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic navigation to home page
            window.location.href = 'home.html';
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Navigate back to login page
            window.location.href = 'index.html';
        });
    }
});
