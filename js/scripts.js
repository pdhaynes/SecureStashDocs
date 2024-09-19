document.addEventListener('DOMContentLoaded', () => {
    const privacyPolicy = document.getElementById('button-privacypolicy');

    privacyPolicy.addEventListener('click', () => {
        window.location.href = 'privacypolicy.html';
    });
});