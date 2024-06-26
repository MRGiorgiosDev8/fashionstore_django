document.addEventListener('DOMContentLoaded', function () {
    const listGroup = document.querySelector('.list-group');
    const links = listGroup.querySelectorAll('a');

    if (!sessionStorage.getItem('linkClicked')) {
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

    setTimeout(() => {
        sessionStorage.removeItem('linkClicked');
    }, 1000);
});