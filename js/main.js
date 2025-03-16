document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const body = document.body;

    menuToggle.addEventListener('click', function() {
        body.classList.toggle('mobile-menu-active');
    });
});