document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('a[href="#contact"]');

    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
});
