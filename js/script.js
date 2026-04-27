document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const userNameSpan = document.getElementById('userName');

    // If we are on home.html, display the username
    if (userNameSpan) {
        const storedUser = localStorage.getItem('username');
        if (storedUser) {
            userNameSpan.textContent = storedUser;
        }
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            localStorage.setItem('username', username);
            // Basic navigation to home page
            window.location.href = 'home.html';
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Optional: clear username on logout
            // localStorage.removeItem('username');
            // Navigate back to login page
            window.location.href = 'index.html';
        });
    }
});
