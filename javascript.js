window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');

    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        navbar.style.color = '#fff';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.color = '#000';
    }
});