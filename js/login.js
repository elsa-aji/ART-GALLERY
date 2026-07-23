// Mock user credentials (in production, this would be handled by a backend)
const validCredentials = {
    'admin': 'password123',
    'user': 'user123',
    'artist': 'artist123'
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;
    const messageDiv = document.getElementById('message');
    
    // Reset message
    messageDiv.className = 'message';
    messageDiv.textContent = '';
    
    // Validation
    if (!username || !password) {
        showError('Please fill in all fields');
        return;
    }
    
    if (password.length < 6) {
        showError('Password must be at least 6 characters');
        return;
    }
    
    // Check credentials
    if (validCredentials[username] && validCredentials[username] === password) {
        showSuccess('Login successful! Redirecting...');
        
        // Store credentials if remember me is checked
        if (rememberMe) {
            localStorage.setItem('rememberedUser', username);
        } else {
            localStorage.removeItem('rememberedUser');
        }
        
        // Simulate redirect after 1.5 seconds
        setTimeout(() => {
            // In production, redirect to dashboard or gallery
            window.location.href = 'gallery.html';
        }, 1500);
    } else {
        showError('Invalid username or password');
        document.getElementById('password').value = '';
    }
});

function showError(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'message error';
    messageDiv.textContent = '❌ ' + message;
}

function showSuccess(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'message success';
    messageDiv.textContent = '✓ ' + message;
}

// Load remembered username on page load
window.addEventListener('load', function() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        document.getElementById('username').value = rememberedUser;
        document.getElementById('remember').checked = true;
        document.getElementById('password').focus();
    }
});

// Demo credentials hint
console.log('Demo credentials:');
console.log('Username: admin, Password: password123');
console.log('Username: user, Password: user123');
console.log('Username: artist, Password: artist123');
