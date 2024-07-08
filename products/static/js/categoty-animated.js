document.addEventListener('DOMContentLoaded', function () {
    const listGroup = document.querySelector('.list-group');
    const links = listGroup.querySelectorAll('a');
    const pagination = document.querySelector('.pagination');
    const pageLinks = pagination.querySelectorAll('a');

    if (!sessionStorage.getItem('linkClicked') && !sessionStorage.getItem('pageLinkClicked')) {
        gsap.set(listGroup, { y: -100, opacity: 0 });

        gsap.to(listGroup, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out'
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function () {
            sessionStorage.setItem('linkClicked', 'true');
        });
    });

    pageLinks.forEach(link => {
        link.addEventListener('click', function () {
            sessionStorage.setItem('pageLinkClicked', 'true');
        });
    });

    setTimeout(() => {
        sessionStorage.removeItem('linkClicked');
        sessionStorage.removeItem('pageLinkClicked');
    }, 1000);
});