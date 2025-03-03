function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '1234'; // আপনি এখানে আপনার পছন্দের পাসওয়ার্ড সেট করুন
    
    if (password === correctPassword) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('resumeSection').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
}

// Enter key press handling
document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});