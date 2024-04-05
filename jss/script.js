document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded.');

    let instagramLink = document.querySelector('a[href="https://www.instagram.com/__glado__/"]');
    let githubLink = document.querySelector('a[href="https://github.com/j0yglvdy5"]');

    if (instagramLink) {
        instagramLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Redirecting to Instagram...');
            window.location.href = event.target.href;
        });
    }

    if (githubLink) {
        githubLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Redirecting to GitHub...');
            window.location.href = event.target.href;
        });
    }

    document.body.addEventListener('mouseover', function() {
        document.body.style.backgroundColor = 'grey';
    });
    
    document.body.addEventListener('mouseout', function() {
        document.body.style.backgroundColor = '#f4f4f4';
    });
});
