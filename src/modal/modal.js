document.addEventListener('DOMContentLoaded', () => {
    // Create modal container
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', 'loginModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" id="closeModal">&times;</span>
            <h2>Login to Your Account</h2>
            <label for="modal-username">Username:</label>
            <input type="text" id="modal-username" placeholder="Enter your username">
            <label for="modal-password">Password:</label>
            <input type="password" id="modal-password" placeholder="Enter your password">
            <button id="submitModal">Login</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Modal logic
    const loginBtn = document.getElementById('login');
    const closeModalBtn = document.getElementById('closeModal');
    const submitModal = document.getElementById('submitModal');
    const modalElement = document.getElementById('loginModal');

    function closeModal() {
        modalElement.style.display = 'none';
        document.getElementById('modal-username').value = '';
        document.getElementById('modal-password').value = '';
    }

    loginBtn.addEventListener('click', () => {
        modalElement.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', closeModal);

    submitModal.addEventListener('click', () => {
        const username = document.getElementById('modal-username').value;
        if (username.trim()) {
            closeModal();
            window.location.href = './dashboard/dashboard.html';
        } else {
            alert('Please enter a valid username.');
        }
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalElement) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
